"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Printer } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type Labels = { print: string; download: string; generating: string };
type PdfLinkArea = {
  height: number;
  href: string;
  left: number;
  top: number;
  width: number;
};

function getPdfLinkAreas(element: HTMLElement): PdfLinkArea[] {
  const rootRect = element.getBoundingClientRect();
  const links = Array.from(element.querySelectorAll<HTMLAnchorElement>("a[data-pdf-link][href]"));

  return links
    .map((link) => {
      const rect = link.getBoundingClientRect();

      return {
        height: rect.height,
        href: link.href,
        left: rect.left - rootRect.left,
        top: rect.top - rootRect.top,
        width: rect.width,
      };
    })
    .filter((area) => area.href && area.width > 0 && area.height > 0);
}

export function CvActions({ targetId = "cv-root", labels }: { targetId?: string; labels?: Labels }) {
  const [downloading, setDownloading] = useState(false);

  async function handleDownloadPdf() {
    const element = document.getElementById(targetId);
    if (!element) return;

    setDownloading(true);
    try {
      document.documentElement.classList.add("cv-export");
      await new Promise((resolve) => setTimeout(resolve, 80));

      const elementRect = element.getBoundingClientRect();
      const pdfLinkAreas = getPdfLinkAreas(element);
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: document.documentElement.scrollWidth,
        scrollY: -window.scrollY,
      });

      const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 24;
      const printableWidth = pageWidth - margin * 2;
      const printableHeight = pageHeight - margin * 2;
      const scale = canvas.width / printableWidth;
      const canvasScaleX = canvas.width / elementRect.width;
      const canvasScaleY = canvas.height / elementRect.height;
      const pageCanvasHeight = Math.floor(printableHeight * scale);
      const pageCanvas = document.createElement("canvas");
      const context = pageCanvas.getContext("2d");

      if (!context) return;

      pageCanvas.width = canvas.width;
      let renderedHeight = 0;
      let pageIndex = 0;

      while (renderedHeight < canvas.height) {
        const sliceHeight = Math.min(pageCanvasHeight, canvas.height - renderedHeight);
        pageCanvas.height = sliceHeight;
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        context.drawImage(canvas, 0, renderedHeight, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

        const imageData = pageCanvas.toDataURL("image/png");
        const imageHeight = sliceHeight / scale;

        if (pageIndex > 0) pdf.addPage();
        pdf.addImage(imageData, "PNG", margin, margin, printableWidth, imageHeight, undefined, "FAST");
        for (const link of pdfLinkAreas) {
          const linkLeft = link.left * canvasScaleX;
          const linkTop = link.top * canvasScaleY;
          const linkWidth = link.width * canvasScaleX;
          const linkHeight = link.height * canvasScaleY;
          const visibleTop = Math.max(linkTop, renderedHeight);
          const visibleBottom = Math.min(linkTop + linkHeight, renderedHeight + sliceHeight);

          if (visibleBottom <= visibleTop) continue;

          pdf.link(
            margin + linkLeft / scale,
            margin + (visibleTop - renderedHeight) / scale,
            linkWidth / scale,
            (visibleBottom - visibleTop) / scale,
            { url: link.href },
          );
        }

        renderedHeight += sliceHeight;
        pageIndex += 1;
      }

      pdf.save("curriculo-weslei-b-santana.pdf");
    } finally {
      document.documentElement.classList.remove("cv-export");
      setDownloading(false);
    }
  }

  const printLabel = labels?.print ?? "Imprimir";
  const downloadLabel = labels?.download ?? "Baixar PDF";
  const generatingLabel = labels?.generating ?? "Gerando...";

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" className="bg-[#ffffff] text-[#0f172a] hover:bg-[#f8fafc] dark:bg-[#ffffff] dark:text-[#0f172a] dark:hover:bg-[#f8fafc]" onClick={() => window.print()}>
        <Printer data-icon="inline-start" />
        {printLabel}
      </Button>
      <Button size="sm" className="bg-[#2563eb] text-[#ffffff] hover:bg-[#1d4ed8] dark:bg-[#2563eb] dark:text-[#ffffff] dark:hover:bg-[#1d4ed8]" onClick={handleDownloadPdf} disabled={downloading}>
        {downloading ? <Loader2 data-icon="inline-start" className="animate-spin" /> : <Download data-icon="inline-start" />}
        {downloading ? generatingLabel : downloadLabel}
      </Button>
    </div>
  );
}

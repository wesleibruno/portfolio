"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function CvActions({ targetId = "cv-root" }: { targetId?: string }) {
  const [downloading, setDownloading] = useState(false);

  async function handleDownloadPdf() {
    const element = document.getElementById(targetId);
    if (!element) return;
    setDownloading(true);
    try {
      // Forçar variáveis de cor em RGB/HEX para evitar erros do html2canvas com oklch/lab
      document.documentElement.classList.add("cv-export");
      await new Promise((r) => setTimeout(r, 50));
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 0;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        pdf.addPage();
        position = heightLeft - imgHeight;
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }

      pdf.save("curriculo-weslei.pdf");
    } finally {
      document.documentElement.classList.remove("cv-export");
      setDownloading(false);
    }
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={() => window.print()}>
        <Printer className="mr-2 h-4 w-4" /> Imprimir
      </Button>
      <Button size="sm" onClick={handleDownloadPdf} disabled={downloading}>
        <Download className="mr-2 h-4 w-4" /> {downloading ? "Gerando..." : "Baixar PDF"}
      </Button>
    </div>
  );
}



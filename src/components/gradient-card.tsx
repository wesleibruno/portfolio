import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GradientCard({
  title,
  right,
  children,
  className,
}: {
  title: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl p-[1px] bg-gradient-to-r from-primary/40 via-primary/10 to-transparent ${className ?? ""}`}>
      <Card className="rounded-[12px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{title}</span>
            {right}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}



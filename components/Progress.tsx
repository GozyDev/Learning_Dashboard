"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const ProgressUi = () => {
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(80);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress  value={progress} />;
};

export default ProgressUi;

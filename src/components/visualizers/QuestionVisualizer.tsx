'use client';

import React from 'react';
import MathMotionVisualizer from './MathMotionVisualizer';

interface QuestionVisualizerProps {
  params: any;
  answerValue?: string;
}

export const QuestionVisualizer: React.FC<QuestionVisualizerProps> = ({ params, answerValue }) => {
  if (!params) return null;

  return (
    <div className="w-full relative mb-6">
      <MathMotionVisualizer params={params} answerValue={answerValue} />
    </div>
  );
};

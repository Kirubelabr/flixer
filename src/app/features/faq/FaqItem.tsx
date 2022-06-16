import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import './Faq.scss';

interface IFaq {
  question: string;
  answer: string;
  isActive: boolean;
  onQuestionClick: (param: any) => any;
}

function FaqItem({ question, answer, isActive, onQuestionClick}: IFaq) {

  return (
    <>
      <div className='cursor-pointer mb-2' onClick={onQuestionClick}>
        <div className='faq-question text-xl p-5'>
          <span>
            {question}
          </span>
          <PlusOutlined rotate={isActive ? 45 : 0} />
        </div>
        {
        isActive && <div className='faq-answer text-xl p-5'>
          {answer}
        </div>
        }
      </div>
    </>
  )
}

export default FaqItem;

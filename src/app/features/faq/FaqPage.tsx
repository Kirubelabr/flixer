import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { fetchFaq } from '../../apis/faq.api';
import { IFaq } from '../../shared/models/faq.model';

import './Faq.scss';
import FaqItem from './FaqItem';

function FaqPage() {

  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [activeKey, setActiveKey] = useState(-1);

  useEffect(() => {
    setLoading(true);
    fetchFaq()
      .then((result) => {
        console.log('Fetch Result For FAQ: ', result);
        setFaqs(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  }, []);

  const onQuestionClick = (key: number) => {
    activeKey === key ? setActiveKey(-1) : setActiveKey(key);
  }

  return (
    <>
      <div className='flex justify-center flex-col items-center w-full p-6'>
        <h1 className='mt-8 mb-6 text-3xl text-white font-bold text-center capitalize'>Frequently Asked Questions</h1>
        {loading ? <Spin /> :

          <div className="flex flex-col sm:w-5/6 md:w-3/4 pl-2 pr-2 w-full">
            {faqs && faqs.map((faq: IFaq, index: number) => {
              return <FaqItem
                isActive={activeKey === index}
                onQuestionClick={() => onQuestionClick(index)}
                question={faq.question}
                answer={faq.answer} />
            })}
          </div>}
      </div>
    </>
  );

}

export default FaqPage;

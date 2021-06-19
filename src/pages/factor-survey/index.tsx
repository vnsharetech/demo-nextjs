import SidebarLayout from 'layouts/sidebar-layout';
import { useCallback, useEffect, useState } from 'react';
import { Radio } from '../../components/radio';

const FactorSurveyList = (props) => {
  const { list, selectAnwser } = props;
  return list.map((item, i) => (
    <div className='text-center border-b border-blue-light borer-solid relative' key={i}>
      {item.name}
      <div className='absolute top-full left-0 w-full flex justify-center pt-10'>
        <Radio
          checked={item.checked}
          value={item.name}
          number={item.number}
          onClick={selectAnwser}
        />
      </div>
    </div>
  ));
};

const FactorSurveyOne = (props) => {
  const { onStart, maxWidth } = props;
  const [start, setStart] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const onStartSurvey = useCallback(() => {
    setStart(true);
    onStart();
  }, [setStart, start]);
  useEffect(() => {
    setMaxHeight(document.getElementById('factor-survey-one-content').offsetHeight);
  });
  return (
    <div
      className={`transition-all overflow-hidden duration-700 text-white font-header text-sm relative z-10
    `}
      style={{ maxWidth: `${start ? '0' : maxWidth}px`, height: ` ${maxHeight}px` }}>
      <div
        className='right-0 top-0'
        style={{ width: `${maxWidth}px`, position: start ? 'absolute' : 'relative' }}
        id='factor-survey-one-content'>
        <div className='px-12 pt-12 pb-8 bg-blue-light'>
          <p className='leading-8'>The Factor Survey</p>
          <h2 className='text-5xl mt-7'>Welcome to the Factor Survey</h2>
          <p className='leading-8 mt-3'>Watch how the Factor Survey works:</p>
        </div>
        <div className='relative'>
          {/* <img src='/img/img1.jpg' alt='' />
          <div className='flex absolute top-0 left-0 w-full h-full items-center justify-center'>
            <img src='/img/icons/play-icon.svg' alt='' className='cursor-pointer' />
          </div> */}
          <iframe
            width='100%'
            height='315'
            src='https://www.youtube.com/embed/BtulL3oArQw'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
        <div className='mt-16 flex justify-center'>
          <a
            className='py-3 px-14 rounded-sm bg-blue-btn shadow-cerulean cursor-pointer'
            onClick={onStartSurvey}>
            Start the Factor Survey
          </a>
        </div>
      </div>
    </div>
  );
};

const FactorSurvey = () => {
  const [list, setList] = useState([
    {
      name: 'Not at all',
      checked: false,
    },
    {
      name: 'Not Much',
      checked: false,
      number: 3,
    },
    {
      name: 'Neutral',
      checked: false,
    },
    {
      name: 'Somewhat',
      checked: false,
    },
    {
      name: 'Very Much',
      checked: false,
    },
  ]);

  const [questions, setQuestions] = useState([
    {
      title: `treats all people equally.`,
      anwser: '',
    },
    {
      title: `enjoys examining itself.`,
      anwser: '',
    },
    {
      title: `feels sympathy for those who are worse off.`,
      anwser: '',
    },
    {
      title: `avoids mistakes.`,
      anwser: '',
    },
    {
      title: `is not embarrassed easily.`,
      anwser: '',
    },
    {
      title: `takes charge.`,
      anwser: '',
    },
    {
      title: `doesn't like crowded events.`,
      anwser: '',
    },
    {
      title: `has a sharp tongue.`,
      anwser: '',
    },
  ]);

  const [isComplete, setIsComplete] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isStartEffect, setIsStartEffect] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);
  const [process, setProcess] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [anwser, setAnwser] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [isGoback, setIsGoback] = useState(false);
  const [isFadein, setIsFadein] = useState(false);
  const [isFadeActive, setIsFadeActive] = useState(false);
  const brandName = 'Ford';

  const onStart = () => {
    setIsStartEffect(true);
    setTimeout(() => {
      setIsStart(true);
    }, 700);
  };

  const selectAnwser = useCallback(
    (value) => {
      const _list = list;
      _list.map((item) => {
        if (item.name === value) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      setList(_list);
      setAnwser(value);
    },
    [list, setList, setAnwser]
  );

  const saveQuestion = useCallback(() => {
    if (anwser === '') return false;
    const _questions = questions;
    _questions[questionIndex].anwser = anwser;
    setQuestions(_questions);
    setAnwser(_questions[questionIndex].anwser);
    const _process = ((questionIndex + 1) / questions.length) * 100;
    setProcess(_process);
    if (questionIndex < questions.length - 1) {
      setIsFadein(true);
      setIsFadeActive(true);
      setTimeout(() => {
        setIsFadeActive(false);
        setTimeout(() => {
          setIsFadein(false);
        }, 250);
        const ind = questionIndex + 1;
        setQuestionIndex(ind);
        setAnwser(questions[ind].anwser);
        const _list = list;
        _list.map((item) => {
          if (item.name === questions[ind].anwser && questions[ind].anwser !== '') {
            item.checked = true;
          } else {
            item.checked = false;
          }
        });
        setList(_list);
      }, 250);
    } else {
      setIsComplete(true);
    }
  }, [
    setIsComplete,
    setQuestionIndex,
    setQuestions,
    questionIndex,
    questions,
    setList,
    list,
    setAnwser,
    anwser,
  ]);

  const goBack = useCallback(() => {
    if (questionIndex === 0) {
      setIsGoback(true);
      setIsStart(false);
      setTimeout(() => {
        setIsStartEffect(false);
        setIsGoback(false);
        setMaxHeight(document.getElementById('factor-survey-container').offsetHeight);
      }, 500);
    } else {
      const ind = questionIndex - 1;
      console.log(questions);
      setAnwser(questions[ind].anwser);
      setQuestionIndex(ind);
      const _list = list;
      _list.map((item) => {
        if (item.name === questions[ind].anwser) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      setList(_list);
    }
  }, [
    setIsGoback,
    setIsStart,
    setMaxHeight,
    questionIndex,
    setQuestionIndex,
    setList,
    questions,
    setAnwser,
    list,
  ]);

  const onMouseOver = () => {
    setShowTooltip(true);
  };
  const onMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    setMaxHeight(document.getElementById('factor-survey').offsetHeight);
    setMaxWidth(document.getElementById('factor-survey-container').offsetWidth);
  });
  return (
    <div>
      <div
        className={`max-w-796 transition-all duration-700 mx-auto ${
          isComplete ? 'overflow-hidden' : ''
        }`}
        style={{ maxHeight: `${isComplete ? '0px' : '100px'}` }}>
        <div className='mt-8 overflow-hidden rounded-md bg-blue-dark h-2 relative'>
          <div
            className='bg-blue-btn h-full duration-700 transition-all rounded-md'
            style={{ width: `${process}%` }}></div>
        </div>
        <div className='flex justify-between mt-4 text-blue'>
          <div>Starting</div>
          <div className='relative z-40'>
            <div
              className='opacity-40 cursor-pointer'
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}>
              {questions.length} Questions remaining
            </div>
            <div
              className={`absolute top-full left-0 w-full bg-yellow p-3 rounded-md w-tool-tip-survey mt-6 ${
                showTooltip ? 'block' : 'hidden'
              }`}>
              <div className='absolute bottom-full left-0 ml-7 leading-0 -mb-0.5'>
                <img src='/img/icons/arrow-top.svg' alt='' />
              </div>
              <div className='flex items-center'>
                <img src='/img/icons/bt-icon.svg' alt='' />
                <div className='pl-2 text-blue-dark text-xs font-semibold'>Tip!</div>
              </div>
              <div className='text-sm text-black mt-1'>
                This looks like a lot of questions but it goes fast! Sick with it!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-hidden max-w-796 mx-auto'>
        <div
          className='relative mt-8'
          id='factor-survey-container'
          style={{ height: `${isGoback ? maxHeight + 'px' : 'auto'} ` }}>
          {!isStart ? <FactorSurveyOne onStart={onStart} maxWidth={maxWidth} /> : ''}
          <div
            className={`transition-all duration-700 ${isStart ? '' : 'absolute  top-0 z-20'} 
          `}
            style={{ left: `${isStartEffect ? '0' : maxWidth}px` }}>
            <div
              className={`transition-all overflow-hidden duration-700 bg-blue-light text-white font-header text-sm relative`}
              style={{ maxHeight: `${isComplete ? '0' : maxHeight}px`, width: `${maxWidth}px` }}>
              <div
                className={`absolute transition-all duration-300 top-0 left-0 w-full h-full bg-blue-light ${
                  isFadeActive ? 'opacity-100' : 'opacity-50'
                } ${isFadein ? 'z-50' : '-z-1'}`}></div>
              <div className='p-12' id='factor-survey'>
                <p className='leading-8'>Answer question to the best of your ability</p>
                <h2 className='text-5xl mt-7'>
                  {brandName}
                  {` `}
                  {questions[questionIndex].title}
                </h2>
                <div className='mt-24 grid grid-cols-5 leading-8 pb-32'>
                  <FactorSurveyList list={list} selectAnwser={selectAnwser} />
                </div>
                <div className='mt-16 flex items-center justify-between'>
                  <div onClick={goBack} className='cursor-pointer'>
                    <img src='/img/icons/back-icon.svg' />
                  </div>
                  <a
                    className='py-3 px-12 rounded-sm bg-blue-btn shadow-cerulean cursor-pointer'
                    onClick={saveQuestion}>
                    Save and Next Question
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`transition-all overflow-hidden duration-700 bg-blue-light text-white font-header text-sm max-w-640 mx-auto  ${
                isComplete ? 'opacity-100' : 'opacity-20 mt-8'
              }`}>
              <div className='p-12'>
                <p className='leading-8'>Answer question to the best of your ability</p>
                <h2 className='text-5xl mt-7'>
                  Describe what you know about your company’s brand assets.{' '}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FactorSurvey.layout = SidebarLayout;

export default FactorSurvey;

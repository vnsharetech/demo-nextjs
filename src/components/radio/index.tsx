const Radio = (props) => {
  const { checked, number, onClick, value } = props;
  const src = checked ? '/img/icons/check-box-checked.svg' : '/img/icons/check-box-normal.svg';
  const selected = () => {
    onClick(value);
  };
  return (
    <div className='relative inline-block cursor-pointer' onClick={selected}>
      <img src={src} />
      {!checked && number ? (
        <div className='absolute top-0 left-0 w-full h-full text-center text-base flex items-center justify-center'>
          {number}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export { Radio };

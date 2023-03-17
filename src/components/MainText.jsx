const MainText = (props) => {
  return (
    <div className="pt-10">
      <h1 className="text-primary-blue font-semibold">{props.text1}</h1>
      <h1 className="md:w-[65%] lg:w-[50%] font-extrabold text-[25px] mt-1 leading-snug w-[90%] lg:text-[44px] lg:leading-tight py-2 lg:py-4 text-text-dark">
        {props.text2}
      </h1>
      <p className="md:w-[65%] font-medium mt-2 lg:w-[40%] lg:text-[22px] text-text-dark">
        {props.text3}
      </p>
    </div>
  );
};

export default MainText;

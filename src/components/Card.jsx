const Card = (props) => {
  return (
    <div className="bg-white py-10 px-8 mt-10 md:mt-0 rounded-lg">
      <img src={props.cardImg} alt="" />
      <h1 className="font-bold text-text-dark text-2xl mt-8">
        {props.cardTitle}
      </h1>
      <p className="text-text-dark mt-3">{props.cardDescription}</p>
      <button className="bg-[#44E4C9] text-white font-bold py-3 mt-8 w-full rounded-lg">
        See Class
      </button>
    </div>
  );
};

export const CardBlue = (props) => {
  return (
    <div className="bg-[#8C82FC] text-white py-10 px-8 mt-10 md:mt-0 rounded-lg">
      <img src={props.cardImg} alt="" />
      <h1 className="font-bold text-2xl mt-8">
        {props.cardTitle}
      </h1>
      <p className="mt-3">{props.cardDescription}</p>
      <button className="bg-[#44E4C9] text-white font-bold py-3 mt-8 w-full rounded-lg">
        See Class
      </button>
    </div>
  );
};

export default Card;

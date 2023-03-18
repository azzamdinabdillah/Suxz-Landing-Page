const Card = (props) => {
  return (
    <div className="bg-white py-10 px-8 mt-10 md:mt-0 rounded-lg">
      <img src={props.cardImg} alt="" className="rounded overflow-hidden" />
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
      <img src={props.cardImg} alt="" className="rounded overflow-hidden" />
      <h1 className="font-bold text-2xl mt-8">{props.cardTitle}</h1>
      <p className="mt-3">{props.cardDescription}</p>
      <button className="bg-[#44E4C9] text-white font-bold py-3 mt-8 w-full rounded-lg">
        See Class
      </button>
    </div>
  );
};

export const CardTestimonial = (props) => {
  return (
    <div className="mt-14 md:mt-0">
      <div className="border-2 border-[#8C82FC] py-10 px-8 rounded-md relative">
        <img
          src={props.image}
          alt=""
          className="absolute -top-10 left-1/2 -translate-x-1/2"
        />
        <div className="mt-5 text-center">
        <div>
          <h1 className="font-bold text-xl text-text-dark">{props.name}</h1>
          <p className="text-text-grayy">{props.job}</p>
        </div>
        <p className="mt-5">
          {props.description}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

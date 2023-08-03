interface CardLomba {
    image: string;
    coordinator: string;
    category: string;
    timeleft: string;
    status: string;
}

export default function CardLombaProfile({image, coordinator, category, timeleft, status} : CardLomba) {
  return (
    <div className="w-full bg-white rounded-lg flex flex-row px-5 py-4">
      <img
        src={image}
        className="h-[120px] w-[90px] object-cover object-center"
      ></img>
      <div className="flex-1 px-2 py-3 flex flex-col justify-between">
        <div>
          <p className="font-poppinsbold text-md text-black">{coordinator}</p>
          <p className="font-poppinslight text-xs text-black">{category}</p>
        </div>
        <button className="bg-yellow-400 text-xs font-latoregular text-black px-3 py-2 rounded-lg max-w-[400px] hover:bg-yellow-600">
          Lihat Detail
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <p className="whitespace-nowrap text-center flex items-center justify-center text-black bg-[#73C034] h-[50px] w-[40px] text-xs font-latoregular rounded-lg font-medium">
          {timeleft}
        </p>
        <p className="text-[#25B508] text-xs font-poppinsmedium text-end">
          {status}
        </p>
      </div>
    </div>
  );
}

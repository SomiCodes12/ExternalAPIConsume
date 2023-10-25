import pix from "../assets/react.svg";

interface iProps {
  props?: any;
}
const Card: React.FC<iProps> = ({ props }) => {
  return (
    <div>
      <div className="w-[300px] m-1 h-[300px] border rounded">
        <div className="w-full h-[200px] bg-slate-300">
          <img
            src={props?.snippet.thumbnails.high.url}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-[100px] bg-gray-400 p-2 flex items-center">
          <div className="w-[40px] h-[40px] rounded-[50%] border mr-2"></div>
          <div className="font-bold">This is just a simple test</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

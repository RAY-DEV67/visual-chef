

export function TopCard(props) {
  const { post } = props;

  return (
    <div className="topcard w-[42vw] flex flex-col items-center rounded-[10px]">
    <div className="relative" onClick={() => {console.log("working")}}>
      <img
        src={post.images}
        alt="Streetically"
        className=""
      />
    </div>
    

        </div>
  );
}

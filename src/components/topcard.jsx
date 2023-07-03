

export function TopCard(props) {
  const { post } = props;

  return (
    <div className="topcard mb-[2rem] flex flex-col items-center rounded-[10px]">
    <div className="relative" onClick={() => {console.log("working")}}>
      <img
        src={post.images}
        alt="The Visual Chef"
        className=""
      />
    </div>
    

        </div>
  );
}

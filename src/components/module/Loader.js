import { RotatingLines } from "react-loader-spinner"




function Loader() {
  return (
    <div>
      <RotatingLines
            visible={true}
            height="50"
            width="50"
            color="blue"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{ margin: "auto" }}
            wrapperClass=""
          />
    </div>
  )
}

export default Loader

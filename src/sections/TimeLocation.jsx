import { dropBy } from "../constant/index"

const Component = ({data}) => {
  return (
    <div className="w-full sm:w-auto py-8">
      <h2 className="playfair text-2xl text-center pb-4">{data.subTitle}</h2>
      {data.texts.map((text)=>(
          <p 
            key={text} 
            className="lato text-lg font-light pt-2 text-center"
          >
            {text}
          </p>
      ))}      
    </div>
  )
}

const TimeLocation = () => {
  return (
    <div className="flex flex-col px-6 py-10">
      <h1 className="text--4xl font-semibold playfair flex jcc" >{dropBy.heading}</h1>
      <div className="flex flex-col sm:flex-row justify-center">
        <Component data = {dropBy.left}/>
        <div className="relative hidden sm:flex items-center px-28 lg:px-32">
          <span className="h-3/5 w-[1px] bg-black absolute"></span>
        </div>
        <Component data = {dropBy.right}/>
      </div>
    </div>
  )
}

export default TimeLocation;
interface HabitProps{
  completed: number
}

function habit(props: HabitProps) {
  return (
    <div className=" bg-zinc-300 " >habit: {props.test}</div>
  )
}

export default habit
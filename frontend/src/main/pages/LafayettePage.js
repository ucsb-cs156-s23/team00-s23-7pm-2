import BasicLayout from "main/layouts/BasicLayout/BasicLayout";

export default function LafayettePage() {
  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Lafayette, CA</h1>
        <p> {/*Source: https://en.wikipedia.org/wiki/Lafayette,_California*/}
         <b>Lafayette</b> is a city in Contra Costa County, California,
         United States. As of 2020, the city's population was 25,391.
         It was named after theMarquis de Lafayette, a French
         military officer of the American Revolutionary War. 
        </p>
        <p>Added by Arik C.</p>
      </div>
    </BasicLayout>
  )
}
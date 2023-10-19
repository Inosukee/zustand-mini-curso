import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';

export const BearPage = () => {


  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* blackBears */}
        <BlackBears />

        {/* polarBears */}
        <PolarBears />

        {/* pandaBears */}
        <PandaBears />

        {/* bearDisplay */}
        <BearsDisplay />


      </div>

    </>
  );
};


export const BlackBears = () => {
  const increaseBlackBears = useBearStore(state => state.increaseBlackBears)
  const blackBears = useBearStore(state => state.blackBears)
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}

export const PolarBears = () => {
  const increasePolarBears = useBearStore(state => state.increasePolarBears)
  const polarBears = useBearStore(state => state.polarBears)
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button onClick={() => increasePolarBears(-1)}> -1</button>
      </div>
    </WhiteCard>
  )
}

export const PandaBears = () => {
  const increasePandaBears = useBearStore(state => state.increasePandaBears)
  const pandaBears = useBearStore(state => state.pandaBears)
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePandaBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => increasePandaBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

export const BearsDisplay = () => {
  const bears = useBearStore(state => state.bears)
  const addBear = useBearStore(state => state.addBear)
  const clearBear = useBearStore(state => state.clearBear)
  return (
    <WhiteCard>
      <h1>Osos</h1>
      <button onClick={() => addBear()}>Add Bear</button>
      <button onClick={() => clearBear()}>Clear Bear</button>
      <pre>{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  )
}

/*

{
// randam color and number generator

//style
.innernum{
    display: flex;
    height: 100px;
    border: none;
    margin: 1px;
    align-items: center;
    justify-content: center;
    color:  white;
  }

//style end


const header={
    textAlign: 'center',
    fontSize: '22px',
    lineHeight: '20px'
  }
  const numstyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 100px)',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box'
  }
  const Header=(props)=>{
    return(
      <header style={header}>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </header>
    )
  }
  
  const colornum=(n)=>{
    if(n%2==0){
      return 'red'
    }
    else{
      return '#01ab23'
    }
  }
  const rand=()=>{
    let str='';
    let a='0123456789abcde'
    for(let i=0;i<6;i++){
    let ran=Math.floor(Math.random()*a.length);
    str+=a[ran];
    }
    return '#'+str;
  }
  
  
  const Main=()=>{
    let appen=[];
    for(let i=0;i<50;i++)
    {
      appen.push(<div className='innernum' style={{backgroundColor: rand()}}>{rand()}</div>)
    }
    return(
      <div style={numstyle}>
        {appen}
      </div>
    )
  }
  
  const App = () => {
    let title='30 Days Of React';
    let subtitle='Number Genrator';
    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Main />
      </div>
    )
    
  }
  
}

*/



/*

////population

/////////////---------style-----////////////////////

.rowdiv{
    display: flex;
    margin: 3px;
    align-items: center;
}
.contain{
    width: 200px;
    height: 30px;
    margin: 2px;
}
.bar{
   width: 1500px;
   height: 30px;
   justify-content: left;
   border-radius: 3px;
    background-color: orange;
}   


////////////////////////////////
const Header=()=>{
  return(
    <header>
      <h1>30 days of reat</h1>
      <p>World population</p>
    </header>
  )
}

const Main=({coun})=>{
  let country=coun.map((x)=> {
    let num=x.population /10000000;
    console.log(num)
    return(
      <div className='rowdiv'>
        <div className='contain'> {x.country}</div>
        <div className='bar'  style={{width: num,marginRight: (800-num)}}></div>
        <div className='contain'>{x.population}</div>
      </div>
    )
  })
  return(
    <main>
      <div>{country}</div>
    </main>
  )
}

const App=()=>{
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]
  return(
    <div>
      <Header />
      <Main coun={tenHighestPopulation} />
    </div>
  )
}





*/
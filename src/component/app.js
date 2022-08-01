import React, {Component} from "react";
import Singleblock from "./singleblock";
import axios from "axios";
import Searcharea from "./searcharea";


class App extends Component{
    state={
      data:[],
      country:[{country:'ALL',count:67}],
      datacopy:[]
    }
    componentDidMount() {
      this.getcatdata()
    }
  
   
     getcatdata=async ()=>{
      const url='https://api.thecatapi.com/v1/breeds'
      try{
        let response= await axios.get(url)  
        let data= await response.data;
          this.setState({
            data,
          })
          this.state.data.sort((a,b)=>{
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0
          })
          for(let d of this.state.data){
            let f=true;
            this.state.country=this.state.country.map((x)=>{
                if(x.country==d.country_code){
                    x.count++;
                    f=false;
                }
                return x;
            })
            if(f){
               this.setState({ country:[...this.state.country,  {country:d.country_code,count: 1}]})
            }
          }
          this.setState({datacopy:this.state.data});
      }
        catch(error){
          console.log(error)
        }
    }
    lifespancal=()=>{
      let s=0;
      for(let d of this.state.data){
        s=s+ ((parseInt(d.life_span.slice(0,2)) +parseInt(d.life_span.slice(5,7)))/2);
      }
      
      s=(s/67).toFixed(2)
      return s;
    }

    filtercontect=(c='ALL')=>{
        let arr=[];
        if(c=='ALL'){
            arr=this.state.data;
        }
        else{
            arr=this.state.data.filter((x)=> x.country_code==c)
        }
        this.setState({datacopy:arr});
        
    }
   
    render(){
      return(
        <>
        <header>
        <h1>Cat paradise</h1>
        <h2>There are {this.state.data.length} cat breeds</h2>
        <h4>Average weight {this.lifespancal()}</h4>
        </header>


        <div className="searcharea">
            {this.state.country.map((y)=> (<Searcharea country={y} filt={this.filtercontect} />)
          )}
        </div>


        <main>
          {this.state.datacopy.map((x)=>{
                if(x.image!=undefined){
                return (<Singleblock x={x}/>)
                }
              }
            )}
        </main>
  
        </>
        
      )
    }
  }
  

  export default App;
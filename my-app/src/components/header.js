import React, { Component } from 'react';
import logo from '../logo.svg';
import logo_search from '../icons/search.svg';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false
        }
    this.toggleMenu=this.toggleMenu.bind(this)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }
    toggleMenu(){
    this.setState({
        open:!this.state.open
    })
}
    

    render() {
        let style = {
            color: 'white',
            fontSize: 15,
            fontWeight:'bold'
          };
         
        return (
            <>
            <div className=' header'>
               <div className=" d-flex flex-row justify-content-around">
                    <p className="d-flex flex-row "><img width={70} src={logo} alt="logo"/> <span className='mt-3 ' style={style}> GAZIC</span> </p>   
                    <div className='mt-3 d-flex flex-row '>
                        <div class="form-group position-relative col-md-12">
                            {/* <img className='position-absolute logo_search' src={logo_search} alt=""/> */}
                            <div className='position-absolute logo_search '>
                                <svg className='' width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                            </div>
                        
                            <input type="text" class="form-control form-control-sm pl-5"  placeholder="Rechercher"/>
                        </div>
                        <div className='position-relative'>
                            <div className='d-flex flex-row'>
                                <div className='logo_person'>
                                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </div>
                                {this.state.open ? 
                                 <div onClick={this.toggleMenu} className='logo_caret mt-1'>
                                    <svg width="0.7em" height="0.7em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div> : <div onClick={this.toggleMenu} className='logo_caret mt-1'>
                                    <svg width="0.7em" height="0.7em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                    </svg>
                                </div>
                                }
                               
                               
                                <div className='logo_person'>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="ml-2 bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                </div>
                            </div>
                          
                            {this.state.open &&  
                            <div className='menu'>
                            <a href='' className="a_menu">Se connecter</a>
                            </div>}
                        </div>
                    </div>
               </div>
            </div>
           
            </>
        );
    }
}


export default Header;
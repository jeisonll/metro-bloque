import {Nav, Button,Navbar, NavDropdown} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Link from "next/link";









export default function HeaderNavbar(){
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);



    const handleClick = (e) => {

    }
    return(


        <div>
            {/*<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">*/}
            {/*    <div className="container-xl">*/}
            {/*        <Link href="/">*/}
            {/*            <a className="navbar-brand">GyanBlog</a>*/}
            {/*        </Link>*/}
            {/*        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Example07XL" aria-controls="Example07XL" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon"></span>*/}
            {/*        </button>*/}

            {/*        <div className="collapse navbar-collapse" id="Example07XL">*/}
            {/*            <ul className="navbar-nav mr-auto">*/}
            {/*                <li className="nav-item active">*/}
            {/*                    <Link href="/">*/}
            {/*                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <Link href="/newpages">*/}
            {/*                        <a className="nav-link">Articles</a>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <Link href="/write">*/}
            {/*                        <a className="nav-link">Write</a>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*            <ul className="navbar-nav px-3">*/}
            {/*                <li className="nav-item text-nowrap">*/}
            {/*                    <Button className="nav-link">*/}
            {/*                        Signup*/}
            {/*                    </Button>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Nav>*/}

            <Navbar  expand="xl" bg="dark" variant="dark"  id="hoverText">
                <Navbar.Brand href="/movies">    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto justify-content-center d-flex text-white table-hover">
                        <Link href="/">
                            <Nav.Link id="collasible-nav-dropdown" href="/">HOME</Nav.Link>
                        </Link>

                        <div >
                            <NavDropdown  title="CATALOG" id="collasible-nav-dropdown"  style={{marginLeft:"30%"}}show={isShown1} onMouseEnter={()=>setIsShown1(true)}  onMouseLeave={()=>setIsShown1(false)}>
                                <div className="row justify-content-center"  style={{width:"800px",position:"relative"}}>
                                        <div className="col-3">
                                            <Link href="/admin" >
                                            <NavDropdown.Item>nn</NavDropdown.Item>
                                                </Link>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </div>
                                        <div className="col-3">
                                            <NavDropdown.Item href="">Action11</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </div>
                                        <div className="col-3">
                                            <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </div>
                                </div>
            {/**/}
            {/**/}
            {/**/}
                            </NavDropdown>
                        </div>
                        <NavDropdown  title="EQUIPMENTS" id="collasible-nav-dropdown" style={{marginLeft:"8%"}} show={isShown2} onMouseEnter={()=>setIsShown2(true)}  onMouseLeave={()=>setIsShown2(false)}>
                            <div className="row justify-content-center" style={{width:"800px",position:"relative"}}>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown  title="HARDWARE" id="collasible-nav-dropdown" style={{marginLeft:"5%"}} show={isShown3} onMouseEnter={()=>setIsShown3(true)}  onMouseLeave={()=>setIsShown3(false)}>
                            <div className="row justify-content-center" style={{width:"800px",position:"relative"}}>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown  title="GEAR PULLER" id="collasible-nav-dropdown" style={{marginLeft:"5%"}} show={isShown4} onMouseEnter={()=>setIsShown4(true)}  onMouseLeave={()=>setIsShown4(false)}>
                            <div className="row justify-content-center" style={{width:"800px",position:"relative"}}>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown  title="MEASURING" id="collasible-nav-dropdown" style={{marginLeft:"5%"}} show={isShown5} onMouseEnter={()=>setIsShown5(true)}  onMouseLeave={()=>setIsShown5(false)}>
                            <div className="row " style={{width:"800px",position:"relative",right:"50%"}}>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                            </div>
                        </NavDropdown>
                        <NavDropdown  title="PAGES" id="collasible-nav-dropdown" style={{marginLeft:"5%"}} show={isShown6} onMouseEnter={()=>setIsShown6(true)}  onMouseLeave={()=>setIsShown6(false)}>
                            <div className="row justify-content-center" style={{width:"800px",position:"relative"}}>
                                <div className="col-3" id="openmain">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                                <div className="col-3">
                                    <NavDropdown.Item href="/adminGeders">Action11</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </div>
                            </div>
                        </NavDropdown>
                    </Nav>

            </Navbar.Collapse>
            </Navbar>
                <style jsx global>
                    {`

#collasible-nav-dropdown{
       
      color: white;
      
    } 
    #hoverText{  
    background-color: black !important;
    
    width: 100%;
    padding: 20px;
    
    }
      #collasible-nav-dropdown:hover {
       
      color: #FFCE33;
      
    } 
    
      
                       
`}
                </style></div>
    )
}
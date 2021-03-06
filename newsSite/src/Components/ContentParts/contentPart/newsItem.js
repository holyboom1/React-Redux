import React, {Fragment} from "react"
import {Card,Row, CardBody, Button,CardImg, CardText, CardTitle, CardSubtitle, Col, CardLink, CardImgOverlay} from "reactstrap"
import {connect} from "react-redux";
import {Link, Switch, Route, Redirect} from "react-router-dom";


function NewsItem(props) {
    let item=props.item


    let login = ()=> {
        props.dispatch({type: "LOGIN_MODAL", text: "Необходимо авторизоваться!"})
    }


    return <Fragment>
        {document.cookie.split(";").map((item)=>{ return item.trim()}).includes("loginUser=true") ?
        <Card inverse  className={"col-sm-5 text-decoration-none  m-2"} >
            <Link  to={`/news/${item._id}`}>
            <CardImg className={"mt-2"} width="100%" src={`https://testitschool-c0b7.restdb.io/media/${item.src}?key=5fadbc0e8639597288385325`} alt="Card image cap"  />
            {/*<CardImgOverlay >*/}
                <CardBody>
                <CardTitle tag="h5" className={"text-dark small"}>{item.title}</CardTitle>
                <CardText className={" text-truncate text-dark small"}>
                    {item.preview}
                </CardText>
                <p className={" text-truncate text-dark small "}>
                    Категория: {item.category}<br/>
                    Статус : {item.statuc}
                </p>
                </CardBody>
            {/*</CardImgOverlay>*/}
            </Link>
        </Card>
            :

        <Card inverse  className={"col-sm-5 overflow-hidden m-2"} >
                <Link to={`/news`} onClick={login}>
                <CardImg className={"mt-2"} width="100%" src={`https://testitschool-c0b7.restdb.io/media/${item.src}?key=5fadbc0e8639597288385325`} alt="Card image cap"   />
                {/*<CardImgOverlay >*/}
                    <CardBody>
                    <CardTitle  tag="h5" className={"text-dark small"}>{item.title}</CardTitle>
                    <CardText className={" text-truncate text-dark small"}>
                        {item.preview}
                    </CardText>
                    <p className={" text-truncate text-dark small "}>
                        Категория: {item.category}<br/>
                        Статус : {item.statuc}
                    </p>
                        </CardBody>
                {/*</CardImgOverlay>*/}
                </Link>
        </Card>

        }



    </Fragment>
}
const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(NewsItem);

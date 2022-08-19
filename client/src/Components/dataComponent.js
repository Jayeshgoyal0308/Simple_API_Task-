import React  from "react";

export default function DataComponent({props}) {    
      return (
        <>
        <div className="center">
            <br/>
            <section className="h-100 h-custom" style={{backgroundColor: "#8fc4b7"}}>
                <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-8 col-xl-6">
                    <div className="card rounded-3">
                        <div className="card-body p-2 p-md-1"> 
                        <h6>id: {props.id}</h6>
                        <h6>name: {props.name}</h6>
                        <h6>username: {props.username}</h6>
                        <h6>email: {props.email}</h6>
                        <h6>address: </h6>
                        <h6 className="ms-5">street: {props.address.street}</h6>
                        <h6 className="ms-5">suite: {props.address.suite}</h6>
                        <h6 className="ms-5">city: {props.address.city}</h6>
                        <h6 className="ms-5">zipcode: {props.address.zipcode}</h6>
                        <h6 className="ms-5">geo:</h6>
                        <h6 className="ps-4 ms-5">lat: {props.address.geo.lat}</h6>
                        <h6 className="ps-4 ms-5">lng: {props.address.geo.lng}</h6>
                        <h6>phone: {props.phone}</h6>
                        <h6>website: {props.website}</h6>   
                        <h6>company: </h6>
                        <h6 className="ms-5">name: {props.company.name}</h6>
                        <h6 className="ms-5">catchPhrase: {props.company.catchPhrase}</h6>
                        <h6 className="ms-5">bs: {props.company.bs}</h6>                                             
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>            
        </div>            
        </>
      );
}
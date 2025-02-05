import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationMarker } from './LocationMarker';
import { LocationInfoBox } from './LocationInfoBox';

 const Map = ({ eventData, center,zoom }) => {

    const [locationInfo, setLocationInfo]= useState(null)
    const markers= eventData.map(ev=>{
        //id 8 for wildfire
        //we have only one object so chacking once in if
        if(ev.categories[0].id===8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}  onClick={()=> setLocationInfo({ id:ev.id, title:ev.title})}  />

        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyDdwBvb5g20bn8TI3NusE5D-hra39saK6Q'  }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    ) 
}
Map.defaultProps={
    center:{
        //california
        lat: 42.3265,
        lng: -122.8756
        //karnataka
        // lat:12.972442,
        // lng: 77.580643
    },
    zoom:6 
}

export default Map

import React, { useRef, useEffect,useState } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import styles from '../../styles/EsriMap.module.css'

const EsriMap = ()=>{

    const mapDiv = useRef(null);
    useEffect(() => {
      console.log("load map")
        // Grab the webmap object out of the UseRef() hook
        // so that we can mutate it.
        const map=new ArcGISMap({
          basemap: "osm",
        })
        // let map = webmap.current;
                const view = new MapView({
                  map,
                  container: mapDiv.current,
                  center: [140, -27],
                  scale: 40000000,
                });
        // Configure the map...
    
    }, []);

    return <div className={styles.mapDiv} ref={mapDiv}></div>

}

export default EsriMap;
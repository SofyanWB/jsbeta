import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Drawer } from "@mui/material";
import LayerList from "./LayerList";
import esriConfig from "@arcgis/core/config.js";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Basemap from "@arcgis/core/Basemap.js";
import Search from "@arcgis/core/widgets/Search.js";
import Fullscreen from "@arcgis/core/widgets/Fullscreen.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";
import Home from "@arcgis/core/widgets/Home.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import Graphic from "@arcgis/core/Graphic.js";
import * as promiseUtils from "@arcgis/core/core/promiseUtils.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";

import Navbar2 from "../../components/appBar/Navbar2";

const PetaInteraktif = () => {
	const mapRef = useRef(null);

	const [layerGroups, setLayerGroups] = useState([]);
	const [icons, setIcons] = useState([]);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	useEffect(() => {
		//MAP
		const mapElement = mapRef.current;
		esriConfig.apiKey =
			"AAPK540246aa65f24abfa6aa43a7cfc40eb6Jfk4C215NfKmVsxUI2AzYmxyrCjiI4ElsinqpheQlTpXq6BRW-0-oPu8dhP6JTUW";

		const urlApi = "https://jakartasatu.jakarta.go.id/apimobile/app/web/maps";

		const basemap2020 = new Basemap({
			title: "Peta Dasar 2020",
			thumbnailUrl:
				"https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/afe064255a184168ae05628587819480/data",
			baseLayers: new TileLayer({
				title: "Peta Dasar 2020",
				url: "https://tataruang.jakarta.go.id/server/rest/services/peta_dasar/Peta_Dasar_DKI_Jakarta/MapServer",
			}),
		});

		const map = new Map({
			basemap: basemap2020,
		});

		const view = new MapView({
			map: map,
			container: mapElement,
			popup: {
				defaultPopupTemplateEnabled: true,
			},
			zoom: 15,
			center: [106.826959, -6.176923],
			ui: {
				components: ["attribution"],
			},
		});

		//WIDGET
		const widget = (view, basemap2020) => {
			// Legend Widget
			const legend = new Legend({
				view: view,
				container: document.createElement("div"),
			});
			const expandLegend = new Expand({
				view: view,
				content: legend,
			});
			view.ui.add(expandLegend, "top-left");

			//Search Lokasi
			const search = (view) => {
				const searchWidget = new Search({
					view: view,
					allPlaceholder: "Jalan/Bangunan/RT/RW",
					includeDefaultSources: false,
					locationEnabled: false,
					sources: [
						{
							url: "https://tataruang.jakarta.go.id/server/rest/services/Locator_DKI/GeocodeServer",
							singleLineFieldName: "SingleLine",
							name: "Jakarta Geocoding Service",
							placeholder: "Jalan/Bangunan/RT/RW",
						},
					],
				});

				view.ui.add(searchWidget, {
					position: "top-right",
				});
			};
			search(view);

			//Map Overview
			const overview = (view) => {
				const overviewMap = new Map({
					basemap: "topo-vector",
				});

				const mapView = new MapView({
					container: "overviewDiv",
					map: overviewMap,
					constraints: {
						rotationEnabled: false,
					},
				});

				mapView.ui.components = [];

				mapView.when(() => {
					view.when(() => {
						setup();
					});
				});

				const extentDebouncer = promiseUtils.debounce(async () => {
					await mapView.goTo({
						center: [106.826959, -6.176923],
						zoom: 8,
					});
				});

				function setup() {
					const extent3Dgraphic = new Graphic({
						geometry: null,
						symbol: {
							type: "simple-fill",
							color: [0, 0, 0, 0.5],
							outline: null,
						},
					});
					mapView.graphics.add(extent3Dgraphic);

					reactiveUtils.watch(
						() => view.extent,
						(extent) => {
							extentDebouncer()
								.then(() => {
									extent3Dgraphic.geometry = extent;
								})
								.catch((error) => {
									if (error.name === "AbortError") {
										// Handle the abort error (optional)
										// console.log("Debounced promise was aborted.");
									} else {
										// Handle other errors (optional)
										// console.error("Debounced promise error:", error);
									}
								});
						},
						{
							initial: true,
						}
					);
				}
			};
			overview(view);

			//Full Screen Widget
			const fullscreen = new Fullscreen({
				view: view,
			});
			view.ui.add(fullscreen, "top-right");
			//End Full Screen Widget

			//Basemap Gallery Widget
			const basemap2019 = new Basemap({
				title: "Peta Dasar 2019",
				thumbnailUrl:
					"https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/da6e19041d3942e6a6c4f7b0d82f8c0d/data?token=GJvQdb54ao3JleoMLS-tH4KTlBVNOQom1H2EG3wbtxLih7hwEGzAXcXSvJc-OlEerx--6OcKsNu6ysWwCqu9XO0XEWMPsQ6_iralBTy7Bnc1p1kk1F_rRLiULjREKEg0J8l7-KSHpaO0wGyOESm847Kx52AsWx-E9EjL-0cw1FkBabkI7qlBbDPn-BXEGGXWqHIw_xzzhXSbSwTqjjJKjrlYwY__UzTWOLeFdYvnlpg.",
				baseLayers: new VectorTileLayer({
					title: "Peta Dasar 2019",
					url: "https://jakartasatu.jakarta.go.id/server/rest/services/Hosted/peta_dasar_update_2019_vt/VectorTileServer",
				}),
			});

			const basemapGallery = new BasemapGallery({
				view: view,
				container: document.createElement("div"),
				source: [
					basemap2020,
					basemap2019,
					Basemap.fromId("satellite"),
					Basemap.fromId("hybrid"),
					Basemap.fromId("topo-vector"),
					Basemap.fromId("streets-vector"),
					Basemap.fromId("osm"),
				],
			});
			const expandBasemapGallery = new Expand({
				view: view,
				content: basemapGallery,
			});
			view.ui.add(expandBasemapGallery, "top-right");
			//End Basemap Gallery Widget

			//Locate Widget
			const locateBtn = new Locate({
				view: view,
			});
			view.ui.add(locateBtn, "top-right");
			//End Locate Widget

			//Coordinate Widget
			const coordinateWidget = new CoordinateConversion({
				view: view,
			});
			view.ui.add(coordinateWidget, "bottom-left");
			//End Coordinate Widget

			//Home Widget
			const homeBtn = new Home({
				view: view,
			});
			view.ui.add(homeBtn, "top-right");
			//End Home Widget

			//Skala Widget
			const scaleBar = new ScaleBar({
				view: view,
				unit: "dual",
			});
			view.ui.add(scaleBar, { position: "bottom-left" });
			//End Skala Widget
		};

		widget(view, basemap2020);

		//API MAPPING
		const apiMapping = async (urlApi, map) => {
			const response = await fetch(urlApi);
			const data = await response.json();
			const petaInteraktif = data.data[1].maps;

			const layerGroups = [];
			const iconArray = [];

			petaInteraktif.forEach((peta) => {
				const namaPeta = peta.name;
				const iconPeta = peta.icon;
				const idPeta = peta.id;
				const layers = [];

				const icon = {
					title: namaPeta,
					src: iconPeta,
				};

				iconArray.push(icon);

				if (namaPeta !== "Basemap") {
					peta.layers.forEach((layer) => {
						const urlLayer = layer.service_url;
						const layerName = layer.name;
						const layerOpacity = layer.opacity;
						const layerVisible = layer.is_default;

						const featureLayer = new FeatureLayer({
							url: urlLayer,
							title: layerName,
							visible: layerVisible,
							opacity: layerOpacity,
						});

						layers.push(featureLayer);
					});

					const layerGroup = new GroupLayer({
						layers: layers,
						title: namaPeta,
						visible: true,
						id: idPeta,
					});

					map.layers.add(layerGroup);
					layerGroups.push(layerGroup);
				}
			});

			setLayerGroups(layerGroups);
			setIcons(iconArray);
		};

		apiMapping(urlApi, map);
	}, []);

	const drawer = (
		<Box>
			{layerGroups.map((item, index) => (
				<LayerList key={index} object={item} icons={icons} />
			))}
		</Box>
	);

	return (
		<>
			<Navbar2 />
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid container xs={12}>
						<Grid item xs={0} sm={2}>
							<Drawer
								variant="temporary"
								open={mobileOpen}
								onClose={handleDrawerToggle}
								ModalProps={{
									keepMounted: true,
								}}
								sx={{
									display: { xs: "block", sm: "none" },
									"& .MuiDrawer-paper": {
										boxSizing: "border-box",
										width: "50vw",
									},
								}}
							>
								{drawer}
							</Drawer>
							<Box
								variant="permanent"
								open
								sx={{
									display: { xs: "none", sm: "block" },
									height: "93vh",
									overflowY: "scroll",
								}}
							>
								{drawer}
							</Box>
						</Grid>
						<Grid item xs={12} sm={10}>
							<Box
								ref={mapRef}
								sx={{
									height: "93vh",
								}}
							>
								<Box
									id="overviewDiv"
									sx={{
										position: "absolute",
										bottom: "20px",
										right: "20px",
										width: "20%",
										height: "20%",
										zIndex: 1,
										overflow: "hidden",
										border: "1px solid darkgray",
										borderRadius: "20px",
										display: { xs: "none", sm: "flex" },
									}}
								/>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default PetaInteraktif;

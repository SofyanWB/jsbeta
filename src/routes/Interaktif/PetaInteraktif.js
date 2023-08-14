import React, { useEffect, useRef, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import "@arcgis/core/assets/esri/themes/light/main.css";
import Navbar2 from "../../components/appBar/Navbar2";
import { Box, IconButton } from "@mui/material";
import Basemap from "@arcgis/core/Basemap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import Locate from "@arcgis/core/widgets/Locate";
import Search from "@arcgis/core/widgets/Search.js";
import Graphic from "@arcgis/core/Graphic.js";
import Home from "@arcgis/core/widgets/Home.js";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";
import FeatureTable from "@arcgis/core/widgets/FeatureTable.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import * as promiseUtils from "@arcgis/core/core/promiseUtils.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import TocIcon from "@mui/icons-material/Toc";
import LayersIcon from "@mui/icons-material/Layers";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Button } from "@material-ui/core";

const PetaInteraktif = () => {
	const mapRef = useRef(null);

	const [icons, setIcons] = useState([]);
	const [layerGroups, setLayerGroups] = useState([]);
	const [tableOpen, setTableOpen] = useState(false);
	const [expandedLegend, setExpandedLegend] = useState(false);
	const [expandedLayerList, setExpandedLayerList] = useState(false);

	useEffect(() => {
		const basemap2020 = new Basemap({
			title: "Peta Dasar DKI",
			thumbnailUrl:
				"https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/afe064255a184168ae05628587819480/data",
			baseLayers: new TileLayer({
				title: "Peta Dasar 2020",
				url: "https://tataruang.jakarta.go.id/server/rest/services/peta_dasar/Peta_Dasar_DKI_Jakarta/MapServer",
			}),
		});
		const map = new Map({
			basemap: "hybrid",
		});

		const view = new MapView({
			container: mapRef.current,
			map: map,
			center: [106.826959, -6.176923],
			zoom: 15,
			ui: {
				components: ["attribution"],
			},
			popup: {
				defaultPopupTemplateEnabled: true,
			},
		});

		//API MAPPING
		const urlApi = "https://jakartasatu.jakarta.go.id/apimobile/app/web/maps";
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

		//WIDGETS

		//Search Widget
		new Search({
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
			container: "searchWidget",
		});

		//Home Widget
		new Home({
			view: view,
			container: "homeWidget",
		});
		//End Home Widget

		//Full Screen Widget
		new Fullscreen({
			view: view,
			container: "fullScreenWidget",
		});
		//End Full Screen Widget

		//Locate Widget
		new Locate({
			view: view,
			container: "locateWidget",
		});
		//End Locate Widget

		//Basemap Gallery Widget
		new BasemapGallery({
			view: view,
			container: "basemapGalleryWidget",
			source: [
				Basemap.fromId("hybrid"),
				Basemap.fromId("satellite"),
				basemap2020,
				Basemap.fromId("topo-vector"),
				Basemap.fromId("streets-vector"),
				Basemap.fromId("osm"),
			],
		});
		//End Basemap Gallery Widget

		//Coordinate Widget
		new CoordinateConversion({
			view: view,
			container: "coordinateConversionWidget",
		});

		//End Coordinate Widget

		//Legend Widget
		// eslint-disable-next-line
		const legend = new Legend({
			view: view,
			container: "legendBox",
		});

		//Map Overview
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
		//End Map Overview

		// Clean up resources when the component is unmounted
		return () => {
			if (view) {
				view.container = null;
			}
		};
	}, []);

	const LayerList = ({ layerGroup, icons }) => {
		const [expanded, setExpanded] = useState(false);
		const [checkedStates, setCheckedStates] = useState(
			layerGroup.layers.items.map(() => false)
		);

		const handleChange = () => {
			setExpanded(!expanded);
		};

		const handleVisible = (index, layer) => (event) => {
			const newCheckedStates = [...checkedStates];
			newCheckedStates[index] = event.target.checked;
			setCheckedStates(newCheckedStates);

			layer.visible = event.target.checked;
		};

		const openTable = (layer) => (event) => {
			const tableBox = document.getElementById("tableBox");
			tableBox.innerHTML = "";
			new FeatureTable({
				layer: layer,
				container: tableBox,
			});
		};

		return (
			<Accordion
				expanded={expanded}
				onChange={handleChange}
				sx={{ bgcolor: "lightblue" }}
			>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-label="Expand">
					{/* Use the icons array to find the corresponding img src */}
					{icons.find((icon) => icon.title === layerGroup.title)?.src && (
						<img
							src={icons.find((icon) => icon.title === layerGroup.title).src}
							alt={layerGroup.title}
							style={{ width: "24px", height: "24px" }}
						/>
					)}
					<Typography variant="button">{layerGroup.title}</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ bgcolor: "lightgray" }}>
					<FormGroup>
						{layerGroup.layers.items.map((layer, index) => (
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
								key={index}
							>
								<FormControlLabel
									key={index}
									control={<Switch checked={checkedStates[index]} />}
									label={layer.title}
									onChange={handleVisible(index, layer)}
								/>
								<IconButton
									aria-label="Table"
									size="small"
									onClick={openTable(layer)}
								>
									<TableRowsSharpIcon />
								</IconButton>
							</Box>
						))}
					</FormGroup>
				</AccordionDetails>
			</Accordion>
		);
	};

	const drawer = (
		<Box>
			{layerGroups.map((layerGroup, index) => (
				<LayerList key={index} layerGroup={layerGroup} icons={icons} />
			))}
		</Box>
	);

	const tableOpenHandle = () => {
		setTableOpen(!tableOpen);
	};
	const expandLegendHandle = () => {
		setExpandedLegend(!expandedLegend);
		setExpandedLayerList(false);
	};
	const expandLayerListHandle = () => {
		setExpandedLayerList(!expandedLayerList);
		setExpandedLegend(false);
	};

	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<Navbar2 />
			<Box ref={mapRef} sx={{ height: "100vh", width: "100vw" }}>
				<Box
					id="searchWidget"
					sx={{
						position: "absolute",
						top: "100px",
						right: "20px",
					}}
				/>
				<Box
					id="homeWidget"
					sx={{
						position: "absolute",
						top: "140px",
						right: "20px",
					}}
				/>
				<Box
					id="locateWidget"
					sx={{
						position: "absolute",
						top: "180px",
						right: "20px",
					}}
				/>
				<Box
					id="fullScreenWidget"
					sx={{
						position: "absolute",
						top: "220px",
						right: "20px",
					}}
				/>
				<Box
					id="basemapGalleryWidget"
					sx={{
						position: "absolute",
						top: "260px",
						right: "20px",
						height: "300px",
						overflow: "scroll",
					}}
				/>
				<Box
					id="tableWidget"
					sx={{
						position: "absolute",
						top: "580px",
						right: "20px",
					}}
				>
					<Button variant="contained" onClick={tableOpenHandle}>
						<TocIcon />
					</Button>
				</Box>
				<Box
					id="coordinateConversionWidget"
					sx={{
						position: "absolute",
						bottom: "20px",
						left: "20px",
					}}
				/>
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
			<Box
				sx={{
					bgcolor: "white",
					width: "100vw",
					height: "30vh",
					zIndex: 2,
					bottom: "0px",
					left: "0px",
					position: "absolute",
					display: tableOpen ? "block" : "none",
				}}
			>
				<div id="tableBox" />
			</Box>
			<Button
				onClick={expandLayerListHandle}
				style={{ position: "absolute", top: "100px", left: "20px" }}
				variant="contained"
			>
				<LayersIcon />
			</Button>
			<Box
				id="layerListBox"
				sx={{
					position: "absolute",
					left: "100px",
					top: "100px",
					overflowY: "scroll",
					height: "480px",
					width: "300px",
					display: expandedLayerList ? "block" : "none",
				}}
			>
				{drawer}
			</Box>
			<Button
				onClick={expandLegendHandle}
				style={{ position: "absolute", top: "140px", left: "20px" }}
				variant="contained"
			>
				<LegendToggleIcon />
			</Button>
			<Box
				id="legendBox"
				sx={{
					position: "absolute",
					left: "100px",
					top: "140px",
					overflowY: "scroll",
					height: "480px",
					width: "300px",
					display: expandedLegend ? "block" : "none",
					bgcolor: "white",
				}}
			/>
		</div>
	);
};

export default PetaInteraktif;

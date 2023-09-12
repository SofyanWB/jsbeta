import React, { useEffect, useRef, useState } from "react";
import { HalamanNavbar } from "../../../src/components/appBar/Navbar";
import {
	AppBar,
} from "@material-ui/core";
import {
	Nav,
	NavContainer
} from '../../styles/appbar/indexNavbar2';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import "@arcgis/core/assets/esri/themes/light/main.css";
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
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Button } from "@material-ui/core";
import ApiFetcher from "./ApiMap";

import { withTranslation } from 'react-i18next';

function PetaInteraktif(props) {
	const { t } = props;

	document.title = t('interaktif.interaktifTab');

	const mapRef = useRef(null);
	const apiMapData = ApiFetcher();
	const [icons, setIcons] = useState([]);
	const [layerGroups, setLayerGroups] = useState([]);
	const [tableOpen, setTableOpen] = useState(false);
	const [expandedLayerList, setExpandedLayerList] = useState(false);
	const [expandedBasemapGallery, setExpandedBasemapGallery] = useState(false);

	// WIDGET
	const searchWidgetRef = useRef(null);
	const homeWidgetRef = useRef(null);
	const fullScreenWidgetRef = useRef(null);
	const locateWidgetRef = useRef(null);
	const basemapGalleryWidgetRef = useRef(null);
	const coordinateConversionWidgetRef = useRef(null);
	const legendWidgetRef = useRef(null);
	const [expandedLegend, setExpandedLegend] = useState(false);

	useEffect(() => {
		if (apiMapData) {
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
			const petaInteraktif = apiMapData.data[1].maps;

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
									console.log("Debounced promise was aborted.");
								}
							});
					},
					{
						initial: true,
					}
				);
			}
			//End Map Overview

			//Widget-widget

			new Search({
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
				view: view,
				container: searchWidgetRef.current,
			});

			new Home({
				view: view,
				container: homeWidgetRef.current,
			});

			new Fullscreen({
				view: view,
				container: fullScreenWidgetRef.current,
			});

			new Locate({
				view: view,
				container: locateWidgetRef.current,
			});

			new BasemapGallery({
				view: view,
				container: basemapGalleryWidgetRef.current,
				source: [
					Basemap.fromId("hybrid"),
					Basemap.fromId("satellite"),
					basemap2020,
					Basemap.fromId("topo-vector"),
					Basemap.fromId("streets-vector"),
					Basemap.fromId("osm"),
				],
			});

			new CoordinateConversion({
				view: view,
				container: coordinateConversionWidgetRef.current,
			});

			new Legend({
				view: view,
				container: legendWidgetRef.current,
			});
		}
	}, [apiMapData]);

	const handleVisible = (groupIndex, layerIndex) => (event) => {
		const updatedLayerGroups = [...layerGroups];
		updatedLayerGroups[groupIndex].layers.items[layerIndex].visible =
			event.target.checked;
		setLayerGroups(updatedLayerGroups);
	};

	const openTable = (layer) => (event) => {
		const tableBox = document.getElementById("tableBox");
		tableBox.innerHTML = "";
		new FeatureTable({
			layer: layer,
			container: tableBox,
		});
		setTableOpen(true);
	};

	const drawer = (
		<Box>
			{layerGroups.map((layerGroup, groupIndex) => (
				<Accordion key={groupIndex} sx={{ bgcolor: "lightblue" }}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						{icons.find((icon) => icon.title === layerGroup.title)?.src && (
							<img
								src={icons.find((icon) => icon.title === layerGroup.title).src}
								alt={layerGroup.title}
								style={{ width: "24px", height: "24px" }}
							/>
						)}
						<Typography>{layerGroup.title}</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ bgcolor: "lightgray" }}>
						<FormGroup>
							{layerGroup.layers.items.map((layer, layerIndex) => (
								<Box
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									key={layerIndex}
								>
									<FormControlLabel
										control={
											<Switch
												checked={layer.visible}
												onChange={handleVisible(groupIndex, layerIndex)}
											/>
										}
										label={layer.title}
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
			))}
		</Box>
	);

	const tableOpenHandle = () => {
		setTableOpen(!tableOpen);
	};

	const expandLegendHandle = () => {
		setExpandedLegend(!expandedLegend);
		setExpandedLayerList(false);
		setExpandedBasemapGallery(false);
	};

	const expandLayerListHandle = () => {
		setExpandedLayerList(!expandedLayerList);
		setExpandedLegend(false);
		setExpandedBasemapGallery(false);
	};

	const expandBasemapGalleryHandle = () => {
		setExpandedBasemapGallery(!expandedBasemapGallery);
		setExpandedLayerList(false);
		setExpandedLegend(false);
	};

	return (
		<Box>
			<AppBar elevation={0} color='transparent'>
				<Nav>
					<NavContainer>
						<HalamanNavbar />
					</NavContainer>
				</Nav>
			</AppBar>
			<Box ref={mapRef} sx={{ height: "100vh", width: "100vw", p: 0, m: 0 }}>
				<Box
					ref={searchWidgetRef}
					sx={{
						position: "absolute",
						top: "100px",
						right: { xs: 0, sm: "20px" },
						left: { xs: 0, sm: "auto" },
						margin: { xs: "0 auto", sm: 0 },
					}}
				/>
				<Box
					ref={homeWidgetRef}
					sx={{
						position: "absolute",
						top: "140px",
						right: "20px",
					}}
				/>
				<Box
					ref={fullScreenWidgetRef}
					sx={{
						position: "absolute",
						top: "220px",
						right: "20px",
					}}
				/>
				<Box
					ref={locateWidgetRef}
					sx={{
						position: "absolute",
						top: "180px",
						right: "20px",
					}}
				/>
				<Box
					ref={coordinateConversionWidgetRef}
					sx={{
						position: "absolute",
						bottom: "20px",
						left: "20px",
						display: { xs: "none", sm: "flex" },
					}}
				/>
				{/* overview widget element */}
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
				{/* overview widget element */}
				{/* layer list widget element */}
				<Box
					sx={{
						position: "absolute",
						top: { xs: "140px", sm: "100px" },
						left: "20px",
					}}
				>
					<Button onClick={expandLayerListHandle} variant="contained">
						<LayersIcon />
					</Button>
				</Box>
				<Box
					sx={{
						position: "absolute",
						left: { xs: "0px", sm: "100px" },
						top: { sm: "100px" },
						bottom: { xs: "0px" },
						overflowY: "scroll",
						height: { xs: "30vh", sm: "480px" },
						width: { xs: "100vw", sm: "300px" },
						display: expandedLayerList ? "block" : "none",
						bgcolor: { xs: "white", sm: "transparent" },
					}}
				>
					{drawer}
				</Box>
				{/* layer list widget element */}
				{/* legend widget element */}
				<Box
					sx={{
						position: "absolute",
						top: { xs: "180px", sm: "140px" },
						left: "20px",
					}}
				>
					<Button onClick={expandLegendHandle} variant="contained">
						<LegendToggleIcon />
					</Button>
				</Box>
				<Box
					ref={legendWidgetRef}
					sx={{
						position: "absolute",
						left: { xs: "0px", sm: "100px" },
						top: { sm: "140px" },
						bottom: { xs: "0px" },
						overflowY: "scroll",
						height: { xs: "30vh", sm: "480px" },
						width: { xs: "100vw", sm: "300px" },
						display: expandedLegend ? "block" : "none",
						bgcolor: "white",
					}}
				/>
				{/* legend widget element */}
				{/* basemap gallery widget element */}
				<Box
					sx={{
						position: "absolute",
						top: "180px",
						left: "20px",
						display: { xs: "none", sm: "flex" },
					}}
				>
					<Button onClick={expandBasemapGalleryHandle} variant="contained">
						<DashboardIcon />
					</Button>
				</Box>
				<Box
					ref={basemapGalleryWidgetRef}
					sx={{
						position: "absolute",
						left: "100px",
						top: "180px",
						height: "480px",
						width: "300px",
						overflow: "scroll",
						display: expandedBasemapGallery ? "flex" : "none",
					}}
				/>
				{/* basemap gallery widget element */}
				{/* table widget element */}
				<Box
					id="tableWidget"
					sx={{
						position: "absolute",
						top: "220px",
						left: "20px",
						display: { xs: "none", sm: "flex" },
					}}
				>
					<Button variant="contained" onClick={tableOpenHandle}>
						<TocIcon />
					</Button>
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
					<div id="tableBox" style={{ position: "relative" }}>
						<div
							style={{
								textAlign: "center",
								top: "50%",
								paddingTop: "8%",
								position: "relative",
							}}
						>
							Klik Ikon Table pada Layer List<br></br>untuk memunculkan Table
							Layer
						</div>
					</div>
				</Box>
				{/* table widget element */}
			</Box>
		</Box>
	);
};

export const RoutePetaInteraktif = withTranslation()(PetaInteraktif);

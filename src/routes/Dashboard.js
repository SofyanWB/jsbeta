import React, { useState, useEffect } from 'react';
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/indexNavbar2';
import {
    Divider,
    Stack,
    Pagination,
    Grid,
    OutlinedInput,
    useMediaQuery,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Skeleton
} from '@mui/material';
import { HalamanFooter } from "../../src/components/footer/index";
import { withTranslation } from 'react-i18next';
import {
    BoxTitle,
    BoxContainer,
    BoxAtas,
    BoxPagination,
    BoxLittleTitle,
    BoxTitlePagination,
} from '../routes/routeStyle/DashboardStyle';

function Dashboard(props) {
    const { t } = props;

    useEffect(() => {
        document.title = "Dashboard | Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
    }, []);

    const isMobile = useMediaQuery("(max-width: 1042px)");

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    const datas = [
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/RTH.png?v=1689646656896',
            title: 'Dashboard Ruang Terbuka Hijau',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=aa91a84fab5b4f0caa554398793d1ab4',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/Informasi%20Luas%20RDTR%202014.JPG?v=1689646656898',
            title: 'Dashboard Luas Zona RDTR 2014',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/opsdashboard/index.html#/e3739aa48ffa4d3cbd8ec89e6a1e5eab',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/-.JPG?v=1689646656899',
            title: 'Dashboard Penggunaan Lahan Wilayah',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/opsdashboard/index.html#/4ca614e10b3a4493951e50b739849147',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/dashboard%20banjir.JPG?v=1689646656901',
            title: 'Dashboard Informasi Banjir',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/opsdashboard/index.html#/fe8904525a9643899dd11f7d6d466205',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/ASET.png?v=1689646656902',
            title: 'Dashboard Aset',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=4dd993e2fbd04e61833f9959076cae67',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/JAKWIFI.png?v=1689646656904',
            title: 'Dashboard Persebaran Lokasi JakWifi',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=86d4cba95ba84a039a97e06147ec2bd0',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/HALTE.png?v=1689646656906',
            title: 'Dashboard Persebaran Lokasi Halte',
            link: 'https://jakartasatu.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=9fb4c02f04fb4a99b5d58643bde8e0dd',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/SEKOLAH.png?v=1689646656908',
            title: 'Dashborad Lokasi Sekolah',
            link: 'https://experience.arcgis.com/experience/adb1a489b43944b58cef51f08b012177',
        },
        {
            image: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/b66e4854a5014fc3833c9dafc8ff306c/resources/UTILITAS.png?v=1689646656909',
            title: 'Dashboard Persebaran Utilitas',
            link: 'https://tataruang.jakarta.go.id/portal/apps/experiencebuilder/experience/?id=451c316b69994bdaa7094a9884f673f4',
        },
    ];

    const firstIndex = 0;
    const pageSize = isMobile ? 6 : 9;
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState(datas.slice(firstIndex, firstIndex + pageSize));
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        setData(datas.slice(firstIndex, firstIndex + pageSize));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event, value) => {
        setPage(value);
        setData(
            datas.slice(firstIndex + pageSize * (value - 1), pageSize * value)
        );
    };

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);

        const filteredData = datas.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );

        setPage(1);
        setData(filteredData.slice(firstIndex, firstIndex + pageSize));
    };

    return (
        <>
            <AppBar elevation={0} color='transparent'>
                <Nav>
                    <NavContainer>
                        <HalamanNavbar />
                    </NavContainer>
                </Nav>
            </AppBar>
            <BoxContainer>
                <BoxAtas>
                    <BoxTitle>{t('dashboard.judul')}</BoxTitle>
                    <Divider
                        sx={{
                            margin: "0 auto",
                            bgcolor: "#004581",
                            height: 4,
                            width: "75px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }} />
                    <BoxLittleTitle>
                        {t('dashboard.keterangan')}
                    </BoxLittleTitle>
                    <OutlinedInput
                        placeholder={t('dashboard.cariData')}
                        value={searchValue}
                        onChange={handleSearchChange}
                        sx={{
                            width: isMobile ? "87%" : "50%",
                            paddingLeft: "1%",
                            borderRadius: "40px",
                            background: "white",
                            boxShadow: "0 1px 5px rgb(0 0 0 / 0.2)",
                        }}
                    />
                </BoxAtas>
                <BoxPagination>
                    <Grid container
                        spacing={4}
                        sx={{
                            marginTop: '70px',
                            marginBottom: '70px',
                        }}>
                        {data.map((d, i) => (
                            <Grid key={i} item xs={6} md={4}>
                                <Card key={d.id} elevation={0} square={true} sx={{ background: "none" }}>
                                    <CardActionArea href={d.link} target='_blank' disableRipple>
                                        <CardMedia
                                            sx={{
                                                // display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center'
                                            }}>
                                            <Skeleton variant='rounded' animation="wave" sx={{ height: 200, display: loading ? "none" : "flex" }} />
                                            <img onLoad={handleSetLoading}
                                                src={d.image}
                                                alt={d.title}
                                                style={{
                                                    width: '100%',
                                                    height: '200px',
                                                    objectFit: 'cover',
                                                    display: loading ? "flex" : "none"
                                                }}
                                            />
                                            <Skeleton variant='text' animation="wave" sx={{ width: 200, height: 50, display: loading ? "none" : "block" }} />
                                            <CardContent onLoad={handleSetLoading} sx={{ display: loading ? "block" : "none" }}>
                                                <BoxTitlePagination>{d.title}</BoxTitlePagination>
                                            </CardContent>
                                        </CardMedia>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Stack alignItems="center" spacing={2}>
                        <Pagination
                            className="pagination"
                            shape="rounded"
                            count={Math.ceil(datas.length / pageSize)}
                            page={page}
                            onChange={handleChange}
                            sx={{
                                margin: "80px 0 80px 0"
                            }}
                        />
                    </Stack>
                </BoxPagination>
            </BoxContainer>
            <HalamanFooter />
        </>
    );
};

export const RouteDashboard = withTranslation()(Dashboard);

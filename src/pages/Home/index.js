import React, { useEffect, useState } from 'react';
import { ContainerSideGrapich, ContainerGrapichMain, Header, TitleChart } from './styles';
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest as loadRequestDataToday } from '../../store/ducks/dataToday/actions';
import { loadRequest as loadRequestDataByState } from '../../store/ducks/dataByState/actions';
import { loadRequest as loadRequestDataTodayBR } from '../../store/ducks/dataTodayBrazil/actions';

import formatDataBar from '../../utils/formatDataChartBar';

function Home() {
    const ONE_MINUTE = 1000 * 60;
    const dispatch = useDispatch();
    const dataToday = useSelector(state => state["dataToday"]);
    const dataByState = useSelector(state => state["dataByState"]);
    const dataTodayBrazil = useSelector(state => state["dataTodayBrazil"]);

    const [dataMain, setDataMain] = useState({});
    const [dataTotal, setDataTotal] = useState({});
    const [dataTotalYesterday, setDataTotalYesterday] = useState({});

    const chartMain = {
        labels: ["Suspeitos", "Confirmados", "Rejeitados", "Total"],
        datasets: [
            {
                label: "Total de Casos",
                backgroundColor: "transparent",
                borderColor: "rgba(75,192,192,0.8)",
                borderWidth: 1.5,
                hoverBorderColor: "rgba(75,192,192,1)",
                hoverBorderWidth: 2.5,
                borderCapStyle: "butt",
                borderDashOffset: 0.0,
                data: [30, 450, 1402, 1500],
            },
        ],
    };

    const optionsMain = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                fontColor: "gray",
                fontSize: 14,
            },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        lineHeight: 2,
                        fontSize: 12,
                        fontStyle: "bold",
                        precision: 5,
                        suggestedMin: 0,
                        fontColor: "gray",
                        // stepSize: 100,
                        beginAtZero: true,
                        callback: function (tickValue, index, ticks) {
                            return tickValue;
                        },
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: "gray",
                        fontSize: 18,
                        stepSize: 1,
                    },
                },
            ],
        },
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            labels: {
                fontColor: "gray",
                fontSize: 14,
            },
        },
    };

    function getDataDashboard() {
        dispatch(loadRequestDataToday());
        dispatch(loadRequestDataByState());
        dispatch(loadRequestDataTodayBR());
    }

    useEffect(() => {
        getDataDashboard();
        setInterval(getDataDashboard, ONE_MINUTE);
    }, []);

    useEffect(() => {
        const labels = Object.keys(dataToday.data);
        const data = Object.values(dataToday.data);

        const dataChart = formatDataBar(data, labels, "Casos");
        setDataTotal(dataChart);

    }, [dataToday]);

    useEffect(() => {
        const labels = Object.keys(dataTodayBrazil.data);
        const data = Object.values(dataTodayBrazil.data);

        const dataChart = formatDataBar(data, labels, "Casos ontem");
        setDataTotalYesterday(dataChart);

    }, [dataTodayBrazil]);

    useEffect(() => {
        const labels = dataByState.data.map((element) => element.uf).reverse();
        const cases = dataByState.data.map((element) => element.cases).reverse();

        const dataChart = formatDataBar(cases, labels, "Casos");
        setDataMain(dataChart);

    }, [dataByState]);



    return (
        <>
            <ContainerSideGrapich>
                <div className="containerGrapich">
                    <Header>
                        <TitleChart size={1.4}>Total de Casos no Brasil</TitleChart>
                    </Header>
                    <Bar data={dataTotal} options={options} />
                </div>
                <div className="containerGrapich">
                    <Header>
                    <TitleChart size={1.3}>Total de Casos Ontem no Brasil</TitleChart>
                    </Header>
                    <Bar data={dataTotalYesterday} options={options} />
                </div>

            </ContainerSideGrapich>

            <ContainerGrapichMain>
                <Header>
                    <TitleChart size={2.3}>Casos por UF</TitleChart>
                </Header>

                <div className="containerGrapichMain">
                    <Bar data={dataMain} options={optionsMain} />
                </div>
            </ContainerGrapichMain>
        </>
    );
}

export default Home;
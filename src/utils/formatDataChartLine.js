export default function (data, labels, title) {
    return {
        labels,
        datasets: [
            {
                label: title,
                backgroundColor: "transparent",
                borderColor: "rgba(75,192,192,0.8)",
                borderWidth: 1.5,
                hoverBorderColor: "rgba(75,192,192,1)",
                hoverBorderWidth: 2.5,
                borderCapStyle: "butt",
                borderDashOffset: 0.0,
                data,
            },
        ],
    }
}
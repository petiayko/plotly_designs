function get_data(type, size) {
    let max;
    let min;
    let output;
    switch (type) {
        case 'hist':
            max = Math.floor(Math.random() * 100);
            min = max - 500;
            output = [];
            for (let i = 0; i < size; i++) {
                output.push(Math.random() * (max - min) + min);
            }
            return output;

        case 'scatter':
            max = Math.floor(Math.random() * 100);
            min = max - 500;
            output = {'x1': [], 'x2': []};
            for (let i = 0; i < size; i++) {
                output['x1'].push(Math.random() * (max - min) + min);
                output['x2'].push(Math.random() * (max - min) + min);
            }
            return output;

        case 'boxplot':
            output = {};
            for (let val = 1; val !== 6; val++) {
                max = Math.floor(Math.random() * 100);
                min = max - 200;

                let key = Math.random() * (2 - 0.1) + 0.1;
                output[key] = [];
                for (let i = 0; i < size / 5; i++) {
                    output[key].push(Math.random() * (max - min) + min);
                }
            }
            return output;

        case 'parallel':
            max = Math.floor(Math.random() * 100);
            min = max - 200;
            output = {'x1': [], 'x2': []};
            for (let i = 0; i < size; i++) {
                output['x1'].push(Math.random() * (max - min) + min);
                output['x2'].push(Math.random() * (max - min) + min);
            }
            return output;

        case 'error_bar':
            output = {};
            for (let i = 0; i < size; i++) {
                max = Math.floor(Math.random() * 100);
                min = max - Math.floor(Math.random() * 10);
                output[Math.random() * (2 - 0.1) + 0.1] = [Math.random() * (max - min) + min, min, max];
            }
            return output;

        default:
            return [];
    }
}

$(function () {
    {
        let layout = {
            height: 500,
            xaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                },
            },
            yaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                },
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            }
        };
        let values = get_data('error_bar', 5);
        let plot = [];
        layout.xaxis.title.text = 'x axis';
        layout.yaxis.title.text = 'y axis';
        for (let i in values) {
            plot.push({
                x: [i],
                y: [Object.values(values[i])[0]],
                name: i,
                marker: {
                    color: 'rgba(0, 123, 255, 0.5)',
                    line: {
                        color: 'rgb(0, 123, 255)',
                        width: 2
                    }
                },
                error_y: {
                    type: 'data',
                    array: [(Object.values(values[i])[2] - Object.values(values[i])[1]) / 2], // Доверительный интервал
                    visible: true,
                },
                type: 'bar',
                showlegend: false

            });
        }
        Plotly.newPlot('id_error_bar', plot, layout, {responsive: true});
    }
    {
        let layout = {
            height: 500,
            xaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            yaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            }
        };
        let values = get_data('boxplot', 5000);
        let plot = [];
        layout.xaxis.title.text = 'x axis';
        layout.yaxis.title.text = 'y axis';
        for (let i in values) {
            plot.push({
                type: 'box',
                marker: {
                    color: 'rgba(0, 123, 255, 0.3)'
                },
                line: {
                    color: 'rgb(0, 123, 255)',
                    width: 1
                },
                name: i,
                y: Object.values(values[i]),
                showlegend: false
            });
        }
        Plotly.newPlot('id_boxplot', plot, layout, {responsive: true});
    }
    {
        let layout = {
            height: 500,
            xaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            yaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            }
        };
        let plot = [];
        layout.xaxis.title.text = 'x axis';
        layout.yaxis.title.text = '<b>количество семплов</b>';
        plot = [
            {
                type: 'histogram',
                x: get_data('hist', 5000),
                // name: col_a_type !== 'binary' ? cols.b + ' = 0' : cols.a + ' = 0',
                name: 'first',
                marker: {
                    color: 'rgba(0, 123, 255, 0.3)',
                    line: {
                        color: 'rgb(0, 123, 255)',
                        width: 1
                    }
                }
            }, {
                type: 'histogram',
                x: get_data('hist', 5000),
                // name: col_a_type !== 'binary' ? cols.b + ' = 1' : cols.a + ' = 1',
                name: 'second',
                marker: {
                    color: 'rgba(0,61,136,0.3)',
                    line: {
                        color: 'rgb(0, 123, 255)',
                        width: 1
                    }
                }
            }
        ];
        Plotly.newPlot('id_hist', plot, layout, {responsive: true});
    }
    {
        let layout = {
            height: 500,
            xaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            yaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            }
        };
        let values = get_data('parallel', 20);
        let plot = [];
        plot.push({
            type: 'parcats',
            dimensions: [
                {
                    label: 'first',
                    values: values['x1'],
                },
                {
                    label: 'second',
                    values: values['x2']
                }
            ],
            line: {
                color: 'rgba(0, 123, 255, 0.5)',
            }
        });
        Plotly.newPlot('id_parallel', plot, layout, {responsive: true});
    }
    {
        let layout = {
            height: 500,
            xaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            yaxis: {
                title: {
                    font: {
                        size: 12,
                        color: '#000000'
                    }
                }
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            }
        };
        let plot = [];
        let values = get_data('scatter', 4000);
        layout.xaxis.title.text = 'x axis';
        layout.yaxis.title.text = 'y axis';
        plot = [
            {
                type: 'scatter',
                mode: 'markers',
                x: values['x1'],
                y: values['x2'],
                marker: {
                    color: 'rgba(0, 123, 255)',
                }
            }
        ];
        Plotly.newPlot('id_scatter', plot, layout, {responsive: true});
    }
})

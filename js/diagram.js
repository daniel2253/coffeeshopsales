// Sales Chart starts
document.addEventListener('DOMContentLoaded', () => {
    fetch('JSON/sales.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('salesChart').getContext('2d');
            const labels = data.map(item => item.product_category);
            const salesData = data.map(item => parseFloat(item.Sales.replace(/\./g, '').replace(',', '.')));
            
            // Generate dynamic colors for each data point
            const backgroundColors = salesData.map(() => {
                return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`;
            });

            const borderColors = salesData.map(() => {
                return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
            });

            const salesChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Scatter Diagram',
                        data: salesData.map((value, index) => ({ x: index, y: value })),
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1,
                        pointRadius: 6
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'Product Index'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Sales Quantity'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
//Saleschart ends

//transactions chart starts
document.addEventListener('DOMContentLoaded', () => {
    fetch('JSON/transactions.json')
        .then(response => response.json())
        .then(data => {
            const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
            const locations = ["Lower Manhattan", "Hell's Kitchen", "Astoria"];
            
            // Initialize data structure
            const transactionData = locations.map(location => {
                return {
                    label: location,
                    data: months.map(month => {
                        const transaction = data.find(item => item["transaction_date (Tanggal)"] === month && item.store_location === location);
                        return transaction ? transaction.transaction_qty : 0;
                    }),
                    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`,
                    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
                    borderWidth: 1
                };
            });

            const ctx = document.getElementById('transactionChart').getContext('2d');
            const transactionChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: months,
                    datasets: transactionData
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Transaction Quantity'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
//transactions chart ends


//unitPrice chart starts
document.addEventListener('DOMContentLoaded', () => {
    fetch('JSON/unitPrice.json')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.product_category);
            const unitPrices = data.map(item => item["Unit Price"]);
            
            const backgroundColors = unitPrices.map(() => {
                return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`;
            });

            const borderColors = unitPrices.map(() => {
                return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
            });

            const ctx = document.getElementById('unitPriceChart').getContext('2d');
            const unitPriceChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Unit Price',
                        data: unitPrices,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Unit Price'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Product Category'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
//unitPrice ends


//salesOverTime chart starts
document.addEventListener('DOMContentLoaded', () => {
    fetch('JSON/salesOverTime.json')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.transaction_date);
            const salesData = data.map(item => item.Sales);

            const ctx = document.getElementById('salesOverTimeChart').getContext('2d');
            const salesOverTimeChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Sales Over Time',
                        data: salesData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: true
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Sales'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
//salesOverTime chart ends



//productsales chart starts
document.addEventListener('DOMContentLoaded', () => {
    fetch('JSON/productsales.json')
        .then(response => response.json())
        .then(data => {
            const labels = data.map(item => item.product_category);
            const salesData = data.map(item => parseFloat(item.Sales.replace(/\./g, '').replace(',', '.')));
            
            const backgroundColors = salesData.map(() => {
                return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`;
            });

            const borderColors = salesData.map(() => {
                return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`;
            });

            const ctx = document.getElementById('productSalesChart').getContext('2d');
            const productSalesChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Sales',
                        data: salesData,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Product Category'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Sales (€)'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
//productsales chart ends

$(document).ready(function() {
    function fetchAndDisplayData() {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        function filterDataByDate(data, startDate, endDate) {
            if (!startDate || !endDate) {
                return data;
            }
            return data.filter(item => {
                const itemDate = new Date(item.transaction_date);
                return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
            });
        }

        // Fetch and display DataTable data
        $('#data-table').DataTable({
            destroy: true, // Destroy any existing table instance before reinitializing
            ajax: {
                url: 'JSON/data.json', // URL ke file JSON Anda
                dataSrc: function(json) {
                    const filteredData = filterDataByDate(json, startDate, endDate);
                    // Membatasi data menjadi 5000 baris
                    return filteredData.slice(0, 1000);
                }
            },
            columns: [
                { data: 'transaction_id' },
                { data: 'transaction_date' },
                { data: 'transaction_time' },
                { data: 'transaction_qty' },
                { data: 'store_id' },
                { data: 'store_location' },
                { data: 'product_id' },
                { data: 'unit_price' },
                { data: 'product_category' },
                { data: 'product_type' },
                { data: 'product_detail' }
            ],
            responsive: true,
            scrollX: true,
            pageLength: 10 // Mengatur jumlah data per halaman, misalnya 10
        });
    }

    // Event listener for the filter button
    document.getElementById('filterButton').addEventListener('click', fetchAndDisplayData);

    // Initial data fetch
    fetchAndDisplayData();
});

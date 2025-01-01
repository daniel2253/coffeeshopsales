import pandas as pd
data = pd.read_excel('Coffee_Shop_Sales.xlsx')
selected_data = data[['transaction_date','store_location',
                      'product_category','unit_price','transaction_qty']]
selected_data.to_json('data.json', orient='records')



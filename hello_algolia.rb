# hello_algolia.rb
require 'algolia'

# Connect and authenticate with your Algolia app
client = Algolia::Search::Client.create('CDV7I5964Z', 'YourWriteAPIKey')

# Create a new index and add a record
index = client.init_index('test_index')
record = { 'objectID': 1, 'name': 'test_record'}
index.save_object(record).wait()

# Search the index and print the results
results = index.search('test_record')
puts results[:hits][0]

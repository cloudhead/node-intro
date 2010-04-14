require 'rack'

@concurrent = []

run lambda {|env|
  @concurrent << '*'

  puts "---> #{status}"

  result = db_query()

  puts "<--- #{status}"

  @concurrent.pop

  [200, {'Content-Type' => 'text/plain'}, [result]]
}

# Simulate a slow DB query
def db_query
  sleep 1
  "hello world\n"
end

def status
  "#{Time.now.strftime("%H:%M:%S ")} #{@concurrent.join}"
end


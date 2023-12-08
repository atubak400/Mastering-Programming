from flask import Flask, request, render_template_string

app = Flask(__name__)

HTML = '''
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Number Calculator</title>
</head>
<body>
  <form method="post" action="/">
    <label for="numbers-input">Enter numbers separated by spaces:</label>
    <input id="numbers-input" name="numbers" type="text">
    <button type="submit">Calculate</button>
  </form>
  {% if sum is not None %}
    <div>
      <strong>Sum:</strong> {{ sum }}
    </div>
  {% endif %}
</body>
</html>
'''

@app.route('/', methods=['GET', 'POST'])
def sum_numbers():
    sum = None
    if request.method == 'POST':
        numbers_input = request.form['numbers']
        numbers = map(int, numbers_input.split())
        sum = sum(numbers)
    return render_template_string(HTML, sum=sum)

if __name__ == '__main__':
    app.run(debug=True)

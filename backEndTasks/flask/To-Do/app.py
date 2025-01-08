from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Task {self.task}>'


with app.app_context():
    db.create_all()

@app.route('/')
def index():
    
    tasks = Task.query.all()
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    task_content = request.form['todo']
    new_task = Task(task=task_content)
    db.session.add(new_task)
    db.session.commit()
    return redirect('/')

@app.route('/delete/<int:task_id>', methods=['POST'])
def delete(task_id):
    task_to_delete = Task.query.get_or_404(task_id)
    db.session.delete(task_to_delete)
    db.session.commit()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
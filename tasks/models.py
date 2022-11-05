from django.db import models

# nome class é o do app no singular
class Task(models.Model):
  
  STATUS = (
    ('to do', 'To do'),
    ('doing', 'Doing'),
    ('done', 'Done'),
  )

  title = models.CharField(max_length=255)
  description = models.TextField()
  done = models.CharField(
    max_length=5,
    choices=STATUS
    )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


  def __str__(self):
    return self.title
from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class ModelSmokeTest(TestCase):
    def test_user_creation(self):
        user = User.objects.create(name='Test', email='test@example.com', team='Marvel')
        self.assertEqual(user.name, 'Test')
    def test_team_creation(self):
        team = Team.objects.create(name='TestTeam', members=['A', 'B'])
        self.assertEqual(team.name, 'TestTeam')
    def test_activity_creation(self):
        activity = Activity.objects.create(user='Test', activity='Run', duration=10)
        self.assertEqual(activity.activity, 'Run')
    def test_leaderboard_creation(self):
        lb = Leaderboard.objects.create(team='TestTeam', points=100)
        self.assertEqual(lb.points, 100)
    def test_workout_creation(self):
        workout = Workout.objects.create(name='Pushups', suggested_for='Hulk')
        self.assertEqual(workout.suggested_for, 'Hulk')

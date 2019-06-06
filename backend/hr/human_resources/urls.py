from rest_framework import routers
from human_resources import views

app_name = 'human_resources'

router = routers.DefaultRouter()
router.register(r'^users', views.UserProfileView)
router.register(r'^departments', views.DepartmentView)
router.register(r'^jobs', views.JobView)
# router.register(r'^work_record', views.WorkRecordView, base_name='WorkRecord')

urlpatterns = router.urls
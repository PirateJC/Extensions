[{"Owner":"BabylonFan","Date":"2015-11-16T14:58:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a problem with disposing objects. I generate multiple objects in my game and cannot seem to dispose them._lt_/p_gt__lt_p_gt_Is there any way to destroy the objects? I also tried the dispose() method but it didn_t_t quite work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-16T15:12:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The dispose method is definitely the right way to go._lt_/p_gt__lt_p_gt_Want to reproduce your scene in the playground and show us what_t_s not working?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BabylonFan","Date":"2015-11-16T16:21:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The code is too long to recreate it. The problem with dispose is that the object is in fact deleted from  the scene but intersectsMesh() still perceives it as if it is still there._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-16T18:04:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That seems like a bug. Shouldn_t_t be like that._lt_/p_gt__lt_p_gt_Could you reproduce with 2 objects in the playground? Are you constantly checking for intersections?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-16T18:13:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_IntersectsMesh has to be called by you. So I assume you may have a list of meshes to check and perhaps you forgot to remove the disposed meshes from your list?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]
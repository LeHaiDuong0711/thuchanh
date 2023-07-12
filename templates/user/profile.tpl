<section id="sectionProfile" class="m-5">
    <div class="container">
        <div class="d-sm-flex p-3">
            <div class="profile-tab-nav border-right">

                <div class="p-4">
                    <div class="wrap">
                        <form enctype="multipart/form-data" id="editAvatarForm">
                            <div class="profile">
                                <div class="avatar" id="avatar">
                                    <div id="preview"><img src="{$domain}/{$user['avatar']}" id="avatar-image" class="avatar_img">
                                    </div>
                                    <div class="avatar_upload">
                                        <label class="upload_label">Tải lên
                                            <input type="file" id="upload" name="uploadAvatar">
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <ul class="nav nav-tabs flex-column" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="account-tab" data-toggle="tab" data-target="#account"
                            type="button" role="tab" aria-controls="account" aria-selected="true"><i
                                class="fa fa-home text-center mr-1"></i>
                            Tài khoản của tôi</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="password-tab" data-toggle="tab" data-target="#password"
                            type="button" role="tab" aria-controls="password" aria-selected="false"><i
                                class="fa fa-key text-center mr-1"></i>
                            Mật khẩu</button>
                    </li>

                </ul>
            </div>
            <div class="tab-content m-5 p-5" id="myTabContent">
                <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                    <h3 class="mb-4">Cài đặt tài khoản</h3>
                    <form method="post" enctype="multipart/form-data" id="editProfileForm">

                        <div class="row">
                            <div class="col-lg-10">
                                <div class="form-group">
                                    <label>Họ và tên</label>
                                    <input type="text" class="form-control fullName" name="fullName"
                                        value="{$user['fullName']}" readonly>
                                </div>
                            </div>

                            <div class="col-md-10">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control email" name="email" value="{$user['email']}"
                                        readonly>
                                </div>
                            </div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <label>Phone number</label>
                                    <input type="text" class="form-control phoneNumber" name="phoneNumber"
                                        value="{$user['phone']}" readonly>
                                </div>
                            </div>

                        </div>
                        <div class="container-btn">
                            <button type="button" class="btn btn-warning" id="editProfile">Chỉnh sửa</button>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                    <form id="changePasswordForm" method="post">

                        <h3 class="mb-4">Đổi mật khẩu</h3>
                        <div class="row">
                            <div class="col-md-12"><label>Mật khẩu củ</label>
                                <div class="input-group form-group group-password">

                                    <input style=" border-radius: 0 5px 5px 0;" type="password"
                                        class="form-control password" name="oldPassword">
                                    <button type="button" class="btn-showPass"><i class="fa fa-eye"></i></button>
                                    <span class="text-danger errOldPassword"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label>Mật khẩu mới</label>
                                <div class="input-group form-group group-password">

                                    <input style=" border-radius: 0 5px 5px 0;" type="password"
                                        class="form-control password" name="password">
                                    <button type="button" class="btn-showPass"><i class="fa fa-eye"></i></button>
                                    <span class="text-danger errPassword"></span>
                                </div>
                            </div>
                            <div class="col-md-12"><label>Nhập lại mật khâu mới</label>
                                <div class="input-group form-group group-password">

                                    <input style=" border-radius: 0 5px 5px 0;" type="password"
                                        class="form-control password" name="passwordAgain">
                                    <button type="button" class="btn-showPass"><i class="fa fa-eye"></i></button>
                                    <span class="text-danger errPasswordAgain"></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="btn btn-warning change-password"
                                id="submitChangePassword">Lưu</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </div>



</section>
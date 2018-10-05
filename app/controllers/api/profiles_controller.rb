class Api::ProfilesController < ApplicationController
  # check to make sure profile.published == true before return all profiles.
  def index
    @profiles = Profile.all
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render :show
    else
      render json: ['invalid profile'], status: 401
    end
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def profile_params
    params.require(:profile).permit(:fullname, :email, :zipcode, :summary, :description, :published, :imgURL, :resumeLink, :user_id, :categories)
  end
end

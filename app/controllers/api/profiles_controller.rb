class Api::ProfilesController < ApplicationController
  def index
    @profiles = Profile.all
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render :create
    else
      render json: ['invalid profile'], status: 401
    end
  end

  def show
    @profile = Profile.find(params[:id])
  end

  def profile_params
    params.require(:profile).permit(:id, :fullname, :email, :zipcode, :summary, :description, :published, :imgURL, :resumeLink, :user_id)
  end
end

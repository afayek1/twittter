class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @tweets =
    if params[:keywords]
     Tweet.where('text ilike ?',"%#{params[:keywords]}%")
   else
     Tweet.all
   end

   render :json => @tweets
 end

 def show
  @tweet = Tweet.find(params[:id])
  render :json => @tweet
end

def create
  @tweet = Tweet.new(tweet_params)
  @tweet.save
  render :json => @tweet, status: 201
end

def update
  tweet = Tweet.find(params[:id])
  tweet.update_attributes(tweet_params)
  head :no_content
end

def destroy
  tweet = Tweet.find(params[:id])
  tweet.destroy
  head :no_content
end

private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def tweet_params
      params.require(:tweet).permit(:text)
    end
  end

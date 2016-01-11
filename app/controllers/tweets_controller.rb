class TweetsController < ApplicationController
  def index
      @tweets = if params[:keywords]
                   Tweet.where('text ilike ?',"%#{params[:keywords]}%")
                 else
                   []
                 end

      render :json => @tweets
    end

    def show
      @tweet = Tweet.find(params[:id])
      render :json => @tweet
    end
end

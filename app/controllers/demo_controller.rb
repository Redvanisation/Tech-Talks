class DemoController < ApplicationController
  def index
    @user = Demo.first
    render component: 'App', props: { greeting: @user }, tag: 'span', class: 'todo'
  end
end

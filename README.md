# PINTRIGUE

[![Login](https://github.com/EbokianLady/pintrigue/blob/master/app/assets/images/readme_images/sign_in.jpg)](https://pintrigue.herokuapp.com/#/)

## Table of Contents

* [Introduction](#introduction)
* [Technologies](#technologies)
* [Features](#features)

## Introduction <a id="introduction"></a>

[Pintrigue](https://pintrigue.herokuapp.com/#/) is a single-page web application inspired by [Pinterest](https://www.pinterest.com/). Upload and add photos or projects that inspire you, manage a collection of virtual bulletin boards, and browse your fellow pinners for more ideas.

## Technologies <a id="technologies"></a>

* Ruby on Rails
* Javascript
* React/Redux
* HTML5/CSS3
* PostgreSQL database
* Image hosting through AWS

![Board](https://github.com/EbokianLady/pintrigue/blob/master/app/assets/images/readme_images/user_boards.jpg)

## Features <a id="features"></a>
* Browse pin discovery feed
* Manage your own boards and pin collections
* Upload your own pins or re-pin your favorites
* Follow people and boards for easy access
* Responsive display

![Upload](https://github.com/EbokianLady/pintrigue/blob/master/app/assets/images/readme_images/upload.jpg)

### Responsive Display

Utilized CSS grid and media queries for a dynamic display of page content and a smooth UI experience in imitation of Pinterest's aesthetic. Image heights are stored on the database level to guarantee consistant formatting and spacing between pins of varied heights during image load. 

![Masonry](https://github.com/EbokianLady/pintrigue/blob/master/app/assets/images/readme_images/discovery.jpg)

### Custom Error Handler

Wrote a backend error handler to catch expected Pintrigue errors, such incorrect form inputs. Returns error message as determined by en.yml for simpler conversion of the error defaults into flavorful text. Removes unnecessary error logic in the frontend.

app/errors/pintrigue_error/base.rb

`module PintrigueError
  class Base < StandardError
    attr_reader :message, :status

    def initialize(status: 500, message: nil)
      @message = message || 'Something Went Wrong.'
      @status = status
    end

    def as_json(*)
      {
        error_type: self.class.to_s,
        error_message: message
      }
    end
  end
end
`

en.yml
`errors:
      models:
        user:
          attributes:
            email:
              blank: "You missed a spot! Don't forget to add your email."
              invalid: "Hmm...that doesn't look like an email address."
              taken: "Hmm...looks like you already have an account."
            username:
              blank: "You missed a spot! Don't forget to add your username."
              taken: "Hmm...looks like that username is already taken."
            password:
              invalid: "The password you entered is incorrect."
              too_short: "Your password is too short! You need 6+ characters."
              blank: "Your password is too short! You need 6+ characters."`

## Future Features
* Infinity scroll and pre-loading
* add images from websites in addition to upload
* Search bar
* Like pins


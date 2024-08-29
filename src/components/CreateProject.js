import React, { Component } from 'react'

export class CreateProject extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form className="g-3 mb-6 row ">
                        <div className="col-md-8 col-sm-6">
                            <div className="form-floating">
                                <input placeholder="Project title" type="text" id="project_title" className="form-control" name='project_title' />
                                <label for="floatingSelect text-black">Works with selects</label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div class="form-floating">
                                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label for="floatingSelect text-black">Works with selects</label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectPrivacy">
                                <option>Select privacy</option>
                                <option value="1">Data Privacy One</option>
                                <option value="2">Data Privacy Two</option>
                                <option value="3">Data Privacy Three</option>
                            </select><label for="floatingSelectPrivacy">Project privacy</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectTeam">
                                <option>Select team</option>
                                <option value="1">Team One</option>
                                <option value="2">Team Two</option>
                                <option value="3">Team Three</option>
                            </select><label for="floatingSelectTeam">Team</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectAssignees">
                                <option>Select assignees</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select><label for="floatingSelectAssignees">People</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectAdmin">
                                <option>Select admin</option>
                                <option value="1">Data Privacy One</option>
                                <option value="2">Data Privacy Two</option>
                                <option value="3">Data Privacy Three</option>
                            </select><label for="floatingSelectAdmin">Project Lead</label></div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><input placeholder="Project title" type="text" id="startDate"
                                className="form-control flatpickr-input" readonly="readonly" />
                                <label for="startDate">Start date</label>
                            </div>

                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="form-floating"><input placeholder="Deadline" type="text" id="deadline"
                                className="form-control flatpickr-input" readonly="readonly" />
                                <label for="deadline">Deadline</label>
                            </div>

                        </div>
                        <div className="my-4 col-12">
                            <div className="form-floating"><textarea placeholder="Leave a comment here" id="floatingProjectOverview"
                                className="form-control"></textarea><label for="floatingProjectOverview">Project
                                    overview</label></div>
                        </div>
                        <div className="my-4 col-md-6">
                            <div className="form-floating"><select className="form-select" id="floatingSelectClient">
                                <option>Select client</option>
                                <option value="1">Client One</option>
                                <option value="2">Client Two</option>
                                <option value="3">Client Three</option>
                            </select><label for="floatingSelectClient">Client</label></div>
                        </div>
                        <div className="gy-6 col-md-6">
                            <div className="form-floating"><input placeholder="Budget" type="text" id="floatingInputBudget"
                                className="form-control" /><label for="floatingInputBudget">Budget</label></div>
                        </div>

                        <div className="gy-6 col-12">
                            <div className="d-flex justify-content-end gap-3"><button type="button"
                                className="px-5 btn btn-phoenix-primary">Cancel</button><button type="button"
                                    className="px-5 px-sm-15 btn btn-primary">Create Project</button></div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default CreateProject
